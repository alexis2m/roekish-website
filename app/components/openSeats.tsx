import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from "@/components/ui/badge"


export default function OpenSeats() {
  return (
    <div className="flex flex-col mt-10 justify-center text-center items-center">
      <h2 className="text-2xl font-bold text-center">Places disponibles</h2>
      <div className='flex items-center sm:w-1/2'>
        <p className="text-center">
          Pour garantir une qualité optimale, et une communication parfaite, nos
          places sont limitées. Cette page vous renseignera sur les places
          disponibles aujourd'hui et dans les prochains jours.
        </p>
      </div>
      <div className="flex flex-row w-full">
        <Table>
          <TableCaption>Les places sont mises-à-jour toutes les semaines.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Nom</TableHead>
              <TableHead className="text-right">Type</TableHead>
              <TableHead className="text-right">Livraison</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
          <TableRow>
              <TableCell className="font-medium text-left">NeoNid</TableCell>
              <TableCell className="text-right">SaaS</TableCell>
              <TableCell className="text-right">12/03</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-left">StarStream</TableCell>
              <TableCell className="text-right">Audit</TableCell>
              <TableCell className="text-right">18/02</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-left">TurboTrône</TableCell>
              <TableCell className="text-right">CRM</TableCell>
              <TableCell className="text-right">25/02</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium text-left">TurboTech{" "}<Badge variant="outline">libre</Badge></TableCell>
              <TableCell className="text-right"><Badge variant="outline">à définir</Badge></TableCell>
              <TableCell className="text-right"><Badge variant="outline">à définir</Badge></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
