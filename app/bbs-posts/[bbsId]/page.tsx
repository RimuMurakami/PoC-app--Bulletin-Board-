import { BBSData } from "@/app/types/types";
import Link from "next/link";
import React from "react";

async function getDetailBBSAllData(id: number) {
  const response = await fetch(`http://localhost:3000/api/post/${id}`, {
    cache: "no-store",
  });

  const bbsDetailAllData: BBSData = await response.json();

  return bbsDetailAllData;
}

const BBSDetailPage = async ({ params }: { params: { bbsId: number } }) => {
  const bbsDetailData = await getDetailBBSAllData(params.bbsId);
  const { title, username, content } = bbsDetailData;
  return (
    <div className="mx-auto max-w-4xl p-4">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-gray-500">{username}</p>
      </div>

      <div className="mb-8">
        <p className="text-gray-900">{content}</p>
      </div>

      <Link href={"/"} className="bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-300">
        戻る
      </Link>
    </div>
  );
};

export default BBSDetailPage;
