"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

type TFormContact = {
  name: string;
  email: string;
  message: string;
}
export default function Home() {
  const form = useForm<TFormContact>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    }
  });

  function handleSubmit(data: TFormContact) {
    console.log("🚀 *** ~ handleSubmit ~ data:", data)
  }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Card className="p-8">
        <CardHeader>
          <CardTitle>Contato</CardTitle>
          <CardDescription>Preencha os campos para falar com a gente.</CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu nome." {...field} />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-Mail</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="Digite seu e-mail." {...field} />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensagem</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Digite aqui sobre o que poderemos ajudar." {...field} />
                    </FormControl>
                    <FormDescription />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="mt-5 w-full" type="submit">Enviar</Button>
            </form>
          </Form>
        </CardContent>

        <CardFooter>
          <p>Entraremos em contato o mais rápido possível.</p>
        </CardFooter>
      </Card>
    </div>
  );
}
