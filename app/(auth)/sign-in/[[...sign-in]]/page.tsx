import { SignIn } from "@clerk/nextjs";

function SignInScreen() {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <SignIn />
        </div>
    )
}

export default SignInScreen;