import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function WaitListCard(){

    return (
        <div>
            <Card className="w-[400px] mt-20 ">
                <CardHeader>
                    <CardTitle>Join the Waitlist</CardTitle>
                    <CardDescription>Join the revolution !!!</CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="firstName">First Name <span className="font-extralight">(required)</span></Label>
                            <Input id="firstName" placeholder="John" required/>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="lastName">Last Name <span className="font-extralight">(required)</span></Label>
                            <Input id="lastName" placeholder="Arthur" required/>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">Email <span className="font-extralight">(required)</span></Label>
                            <Input id="email" placeholder="johnarthur@gmail.com" required/>
                        </div>
                    </div>
                    </form>
                </CardContent>
                <CardFooter>
                    <Button className="w-full">Jump In</Button>
                </CardFooter>
            </Card>
        </div>
    )
}