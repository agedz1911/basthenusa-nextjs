import { DestinationList } from "@/config/DestinationList";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Edit, Eye, Trash } from "lucide-react";
import Image from "next/image";

const AllDestination = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-primary font-bold">Destination</TableHead>
          <TableHead className="text-primary font-bold">Periode</TableHead>
          <TableHead className="text-primary font-bold">Price</TableHead>
          <TableHead className="text-primary font-bold">Picture</TableHead>
          <TableHead className="text-primary font-bold">Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {DestinationList.map((item, index) => (
          <TableRow key={index} className="text-muted-foreground">
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.periode}</TableCell>
            <TableCell>IDR</TableCell>
            <TableCell>
              <div className="relative w-10 h-10">
                <Image
                  src={item.imgSrc}
                  fill
                  alt={item.title}
                  className="object-cover"
                />
              </div>
            </TableCell>
            <TableCell className="text-sm ">
              <div className="flex items-center gap-2">
                <Eye className="size-4" />
                <Edit className="size-3" />
                <Trash className="size-3" />
              </div>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AllDestination;
