//components/CarPurchaseForm.tsx
"use client"

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';

const formSchema = z.object({
  firstName: z.string().min(2, "Vorname muss mindestens 2 Zeichen lang sein"),
  lastName: z.string().min(2, "Nachname muss mindestens 2 Zeichen lang sein"),
  manufacturer: z.string().min(2, "Bitte Hersteller angeben"),
  model: z.string().min(2, "Bitte Modell angeben"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  phone: z.string().min(6, "Telefonnummer muss mindestens 6 Zeichen lang sein"),
  mileage: z.string().min(1, "Kilometerstand erforderlich"),
  power: z.string().optional(),
  kw: z.string().optional(),
  year: z.string().min(4, "Baujahr erforderlich"),
  vin: z.string().optional(),
  price: z.string().optional(),
  accident: z.string().optional(),
  comments: z.string().optional(),
  privacy: z.boolean().refine(val => val === true, "Bitte akzeptieren Sie die Datenschutzerklärung"),
  spamProtection: z.string().refine(val => val === "16", "Bitte geben Sie die korrekte Zahl ein")
});

type FormValues = z.infer<typeof formSchema>;

export function CarPurchaseForm() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      manufacturer: "",
      model: "",
      email: "",
      phone: "",
      mileage: "",
      power: "",
      kw: "",
      year: "",
      vin: "",
      price: "",
      accident: "",
      comments: "",
      privacy: false,
    },
  });

  async function onSubmit(values: FormValues) {
    console.log(values);
  }

  return (
    <Card className="w-full max-w-4xl mx-auto bg-white shadow-lg">
      <CardHeader className="space-y-1 bg-gradient-to-r from-red-50 to-white border-b">
        <CardTitle className="text-2xl font-bold text-gray-900">Ankauf</CardTitle>
        <CardDescription>
          Füllen Sie das Formular aus und wir melden uns zeitnah bei Ihnen.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Persönliche Daten */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vorname</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Ihr Vorname" 
                        className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nachname</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Ihr Nachname" 
                        className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Rufnummer</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Ihre Rufnummer" 
                        className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Fahrzeugdaten */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="manufacturer"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hersteller</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="z.B. BMW" 
                        className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="model"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Modell</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="z.B. 320d" 
                        className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>E-Mail-Adresse</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="ihre@email.de" 
                        className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Technische Daten */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <FormField
                control={form.control}
                name="mileage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Kilometer</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="z.B. 50000" 
                        className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="power"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>PS</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="z.B. 190" 
                        className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="kw"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>kW</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="z.B. 140" 
                        className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="year"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Baujahr</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="z.B. 2020" 
                        className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Weitere Daten */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="accident"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Unfall</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="border-gray-300 focus:border-red-500 focus:ring-red-500">
                          <SelectValue placeholder="Unfallstatus wählen" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="nein">Unfallfrei</SelectItem>
                        <SelectItem value="ja">Unfall</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preisvorstellung</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Optional" 
                        className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="vin"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Fahrgestellnummer</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Optional" 
                        className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Bemerkungen */}
            <FormField
              control={form.control}
              name="comments"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Weitere Bemerkungen</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Weitere Informationen zu Ihrem Fahrzeug..."
                      className="min-h-[100px] border-gray-300 focus:border-red-500 focus:ring-red-500"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Spam-Schutz und Datenschutz */}
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="spamProtection"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Spam-Schutz: Sechzehn als Zahl</FormLabel>
                    <FormControl>
                      <Input 
                        {...field}
                        className="max-w-[200px] border-gray-300 focus:border-red-500 focus:ring-red-500"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="privacy"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="data-[state=checked]:bg-red-600 data-[state=checked]:border-red-600"
                      />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                      <FormLabel className="text-sm text-gray-600">
                        Die abgesendeten Daten werden nur zum Zweck der Bearbeitung Ihres Anliegens verarbeitet. 
                        Weitere Informationen finden Sie in unserer{' '}
                        <a href="/datenschutz" className="text-red-600 hover:underline">
                          Datenschutzerklärung
                        </a>
                      </FormLabel>
                      <FormMessage />
                    </div>
                  </FormItem>
                )}
              />
            </div>

            <Button 
              type="submit" 
              className="w-full bg-red-600 hover:bg-red-700 text-white"
            >
              Unverbindlich senden
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}