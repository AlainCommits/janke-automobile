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
  privacy: z.boolean().refine(val => val === true, "Bitte akzeptieren Sie die Datenschutzerklärung"),
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
      privacy: false,
    },
  });

  async function onSubmit(values: FormValues) {
    console.log(values);
  }

  return (
    <Card className="w-full bg-white">
      <CardHeader className="space-y-1 bg-gradient-to-r from-red-50 to-white border-b py-3">
        <CardTitle className="text-xl font-bold text-gray-900">Ankauf</CardTitle>
        <CardDescription>
          Füllen Sie das Formular aus und wir melden uns zeitnah bei Ihnen.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-4">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Vorname</FormLabel>
                    <FormControl>
                      <Input {...field} className="h-9" />
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
                      <Input {...field} className="h-9" />
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
                    <FormLabel>Telefon</FormLabel>
                    <FormControl>
                      <Input {...field} className="h-9" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <FormField
                control={form.control}
                name="manufacturer"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Hersteller</FormLabel>
                    <FormControl>
                      <Input {...field} className="h-9" />
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
                      <Input {...field} className="h-9" />
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
                    <FormLabel>E-Mail</FormLabel>
                    <FormControl>
                      <Input {...field} className="h-9" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              <FormField
                control={form.control}
                name="mileage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Kilometer</FormLabel>
                    <FormControl>
                      <Input {...field} className="h-9" />
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
                      <Input {...field} className="h-9" />
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
                      <Input {...field} className="h-9" />
                    </FormControl>
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
                      <Input {...field} className="h-9" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="privacy"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-2 space-y-0 mt-2">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="data-[state=checked]:bg-red-600 data-[state=checked]:border-red-600 mt-1"
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel className="text-sm text-gray-600">
                      Ich akzeptiere die{' '}
                      <a href="/datenschutz" className="text-red-600 hover:underline">
                        Datenschutzerklärung
                      </a>
                    </FormLabel>
                    <FormMessage />
                  </div>
                </FormItem>
              )}
            />

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