import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-100 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Create Account</CardTitle>
          <CardDescription>
            Sign up to start managing your team tasks
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form className="space-y-4">
            <Input type="text" placeholder="Full name" />
            <Input type="email" placeholder="Email address" />
            <Input type="password" placeholder="Password" />

            <Button type="submit" className="w-full">
              Sign Up
            </Button>
          </form>

          <p className="mt-4 text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="font-medium text-zinc-900 underline">
              Login
            </Link>
          </p>
        </CardContent>
      </Card>
    </main>
  );
}