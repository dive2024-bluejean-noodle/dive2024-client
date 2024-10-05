"use client";

import { useUserInfoStore } from "@/app/_store/useUserInfoStore";
import { useShallow } from "zustand/react/shallow";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CheckLoginManager() {
  const router = useRouter();
  const userInfo = useUserInfoStore(
    useShallow((state) => ({
      userInfo: state.userInfo,
    })),
  );

  useEffect(() => {
    if (!userInfo.userInfo?.email) {
      router.push("/");
    }
  }, []);

  return null;
}
