//Users/alonondanse/janke-auto/components/CarPurchaseForm.tsx

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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

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
    },
  });

  async function onSubmit(values: FormValues) {
    console.log(values);
  }

  return (
    <Card className="w-full max-w-3xl mx-auto bg-white shadow-lg">
      <CardHeader className="space-y-1 bg-gradient-to-r from-red-50 to-white border-b p-4">
        <CardTitle className="text-xl font-bold text-gray-900">Ankauf</CardTitle>
        <CardDescription>
          Füllen Sie das Formular aus und wir melden uns zeitnah bei Ihnen.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            {/* Persönliche Daten */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vorname</FormLabel>
                    <FormControl>
                      <Input placeholder="Ihr Vorname" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Rest der Formularfelder bleiben gleich, nur mit kleineren Abständen */}
              {/* ... */}
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