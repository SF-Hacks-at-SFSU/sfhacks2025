import Sharp, { OverlayOptions, FormatEnum, AvailableFormatInfo } from "sharp";
import path from "path";

const sharpInputPath = path.resolve("./src/custom-img-loader");
const sharpOutputPath = path.resolve("./public");

interface AtlasData {
	name: string;
	path: string;
}

interface Sprite {
	logoName: string;
	width: number;
	xOffset: number;
}

export interface Atlas {
	atlasFilePath: string;
	width: number;
	height: number;
	sprites: Sprite[];
}

export interface OutputOptions {
	outputDir?: string;
	outputFileName: string;
	outputFileType?: keyof FormatEnum | AvailableFormatInfo;
}

interface Options {}

export default async function generateAtlases(
	atlasData: AtlasData[],
	maxImgsPerRow: number,
	height: number,
	outputOptions: OutputOptions,
	options: Options = {}
): Promise<Atlas[]> {
	const {
		outputDir = "",
		outputFileName,
		outputFileType = "png",
	} = outputOptions;

	const atlasOutput: Atlas[] = [];
	let compositeBuffer: OverlayOptions[] = [];
	let atlasOutputIndex = 0;
	let atlasOutputWidth = 0;
	const atlasHeight = height;
	let spriteXOffset = 0;
	let atlasSprites: Sprite[] = [];

	const spritesIterator = spriteGenerator();

	let sprite: IteratorResult<AtlasData, void>;

	let loopIteration = 0; // safety measures
	while (true) {
		if (loopIteration > 100000) {
			console.warn("Exceeded Maximum Loop Iteration During Atlas generation");
			break;
		}
		loopIteration++;
		sprite = await spritesIterator.next();

		if (sprite.done && compositeBuffer.length == 0) break;
		if (compositeBuffer.length >= maxImgsPerRow || sprite.done) {
			await saveBufferToFile();

			atlasOutputIndex++;

			atlasSprites = [];
			compositeBuffer = [];
			atlasOutputWidth = 0;
			spriteXOffset = 0;
			continue;
		}
	}

	async function saveBufferToFile() {
		const atlasOutputPath = `${outputDir}/${outputFileName}-${atlasOutputIndex}.${outputFileType as string}`;

		await Sharp({
			create: {
				width: atlasOutputWidth,
				height: atlasHeight,
				background: {
					r: 0,
					g: 0,
					b: 0,
					alpha: 0,
				},
				channels: 4,
			},
		})
			.composite(compositeBuffer)
			.toFormat(outputFileType, { optimiseScans: true })
			.toFile(`${sharpOutputPath}${atlasOutputPath}`);

		atlasOutput.push({
			atlasFilePath: atlasOutputPath,
			width: atlasOutputWidth,
			height: atlasHeight,
			sprites: atlasSprites,
		});
		// console.log(
		// 	`Buffer ${compositeBuffer} has been saved to file ${atlasOutputPath}`
		// );
	}

	async function* spriteGenerator() {
		let buffer: { data: Buffer; info: Sharp.OutputInfo };
		for (const datum of atlasData) {
			buffer = await Sharp(`${sharpInputPath}/${datum.path}`)
				.resize(undefined, atlasHeight)
				// .png() // Not really necessary but just gonna keep it here anyways
				.toBuffer({ resolveWithObject: true });

			atlasSprites.push({
				logoName: datum.name,
				width: buffer.info.width,
				xOffset: spriteXOffset,
			});
			compositeBuffer.push({
				input: buffer.data,
				gravity: "west",
				left: spriteXOffset,
				top: 0,
			});
			atlasOutputWidth += buffer.info.width;
			spriteXOffset += buffer.info.width;
			atlasOutputWidth += height * 0.75; // both fo these are for temporary padding
			spriteXOffset += height * 0.75;

			yield datum;
		}
	}

	return atlasOutput;
}

async function pause(duration: number, message = "paused") {
	await new Promise<void>((resolve) => {
		console.log(message);
		setTimeout(() => {
			resolve();
		}, duration);
	});
}
