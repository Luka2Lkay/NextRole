import { SignUp } from "@clerk/nextjs";

function SignUpScreen() {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <SignUp />
        </div>
    )
}

export default SignUpScreen