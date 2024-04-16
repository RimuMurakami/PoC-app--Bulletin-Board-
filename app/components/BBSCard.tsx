import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { BBSData } from "../types/types";

interface BBSDataProps {
  bbsData: BBSData;
}

function BBSCard({ bbsData }: BBSDataProps) {
  const { id, username, title, content, createdAt } = bbsData;

  return (
    <Card className="">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{username}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
      <CardFooter className="flex justify-between">
        <Link href={`/bbs-posts/${id}`} className="text-blue-700">
          Read More
        </Link>
      </CardFooter>
    </Card>
  );
}

export default BBSCard;
