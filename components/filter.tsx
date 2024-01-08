import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export type FilterArray = {
  name: string;
  value: string;
};

export interface FilterProps {
  filters: FilterArray[];
  defaultValue?: string;
}

export function Filter({ filters, defaultValue }: FilterProps) {
  return (
    <Select defaultValue={defaultValue}>
      <SelectTrigger className="w-[150px]">
        <SelectValue placeholder="Filter" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {filters.map((filter, id) => (
            <SelectItem key={id} value={filter.value}>
              {filter.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
