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
import { useState } from "react"
import { useToast } from "./ui/use-toast"

export function WaitListCard(){

    const[firstName,setFirstName] = useState("");
    const[lastName,setLastName] = useState("");
    const[email,setEmail] = useState("");
    const {toast} = useToast();

    function isValidEmailRegex(pattern : string){
        const validEmailRegex = /^(?:\w+\.?\w*|\w+)@\w+\.\w+$/;
        return validEmailRegex.test(pattern);
    }

    function handleValidity(){

        if(!isValidEmailRegex(email)){
            toast({
                title:"Invalid Email Address",
                description:"Please Enter Valid Email Address !",
                variant:"destructive"
            })
            return false;
        }

        if(firstName === ""){
            toast({
                title:"Invalid First Name",
                description:"First Name cannot be Empty !",
                variant:"destructive"
            })
            return false;
        }

        if(lastName === ""){
            toast({
                title:"Invalid Last Name",
                description:"Last Name cannot be Empty !",
                variant:"destructive"
            })
            return false;
        }

        if(firstName.charAt(0) === " " || lastName.charAt(0) === " "){
            toast({
                title:"Invalid Name",
                description:"Please enter valid names!",
                variant:"destructive"
            })

            return false;
        }

        toast({
            description:"Thank you for joining the waitlist !! We will notify you soon !!!"
        })

        return true;
    }

    function handleSubmit(){
        
        if(handleValidity()){
            setFirstName((n)=>"");
            setLastName((n)=>"");
            setEmail((n)=>"");
        }
        
    }

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
                            <Input id="firstName" placeholder="John" required value={firstName} onChange={(e)=>setFirstName((n)=>e.target.value)}/>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="lastName">Last Name <span className="font-extralight">(required)</span></Label>
                            <Input id="lastName" placeholder="Arthur" required value={lastName} onChange={(e)=>setLastName((n)=>e.target.value)}/>
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="email">Email <span className="font-extralight">(required)</span></Label>
                            <Input id="email" placeholder="johnarthur@gmail.com" required value={email} onChange={(e)=>setEmail((n)=>e.target.value)}/>
                        </div>
                    </div>
                    </form>
                </CardContent>
                <CardFooter>
                    <Button className="w-full" onClick={handleSubmit}>Jump In</Button>
                </CardFooter>
            </Card>
        </div>
    )
}