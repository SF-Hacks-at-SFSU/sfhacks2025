"use client";

import { useParams } from "next/navigation";
import { QRCodeCanvas } from "qrcode.react";


export default function CheckInPage() {
  const params = useParams();
  const id = params?.id;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-semibold mb-4">Check-in QR Code</h1>
      {id ? (
        <QRCodeCanvas value={id} size={256} />

      ) : (
        <p>Loading QR Code...</p>
      )}
    </div>
  );
}