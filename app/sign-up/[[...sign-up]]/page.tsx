import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="auth-container flex flex-row w-[100%] justify-center">
    <div className="flex flex-row w-[50%] justify-center h-screen items-center">
      <SignUp path="/sign-up" />
    </div>
    <div className="flex flex-row w-[50%] justify-center"></div>
  </div>
  )
}
