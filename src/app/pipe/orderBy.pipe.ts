import { Pipe, PipeTransform } from "@angular/core";
import { orderBy } from "lodash";

@Pipe({
    name: "orderBy"
})
export class orderByPipe implements PipeTransform {
    transform(array: any, ...args: any[]) {
        return orderBy(array, 'overallScore', 'asc')
    }
}