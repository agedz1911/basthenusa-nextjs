import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const SendMessage = () => {
  return (
    <Card>
      <CardContent className="py-10 space-y-5">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-2">
          <Input type="text" id="subject" placeholder="Name" />
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <Input type="text" id="subject" placeholder="Subject" />
        <Textarea placeholder="type your message here" />
      </CardContent>
      <CardFooter>
        <Button className="w-full">Send Message</Button>
      </CardFooter>
    </Card>
  );
};

export default SendMessage;
