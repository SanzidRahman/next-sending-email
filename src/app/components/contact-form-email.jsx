import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";



// type ContactFormEmailprops = {
//     message : string;
// };

export default function ContactFormEmail(message ){
  return (
   <Html>
    <Head />
    <Preview>Message from your portfolio</Preview>
    <Tailwind>
        
            <Body>
              <Container>
                <Section>
                    <Heading>You have received A message </Heading>
                    <Text>{message}</Text>
                    <Hr />
                    
                </Section>
              </Container>
            </Body>
        
    </Tailwind>
   </Html>
  )
};
