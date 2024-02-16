import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export default function ProcessCard({ title, description, contentText, buttonLink, buttonText, target }) {
  return (
    <div className="flex-none w-2/3 md:w-1/3 mr-8 md:pb-4 rounded-lg">
      <Card>
        <CardHeader>
          <CardTitle className="text-left">{title}</CardTitle>
          <CardDescription className="text-left">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-left">
          <p>
            {contentText}
          </p>
        </CardContent>
        <CardFooter className="">
          <a
            href={buttonLink}
            target={target}
            rel="noopener noreferrer"
            className="inline-flex items-center"
          >
            <Button>{buttonText}</Button>{' '}
          </a>
        </CardFooter>
      </Card>
    </div>
  );
}
