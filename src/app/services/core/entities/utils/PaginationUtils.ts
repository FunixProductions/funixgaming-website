import {FunixBotUserExpFields} from "src/app/services/funixgaming-api/enums/funixbot";
import {SearchEnum, SortEnum} from "../enums/PaginationEnums";

export class RequestPagination {
    page: number;
    elemsPerPage: number;
    search?: PaginationSearch[];
    sort?: PaginationSort[];

    constructor(page: number = 0, elemsPerPage: number = 300, search?: PaginationSearch[], sort?: PaginationSort[]) {
        this.page = page;
        this.elemsPerPage = elemsPerPage;
        if (search) this.search = search;
        if (sort) this.sort = sort;
    }
}

export class PaginationSearch {
    search: string;

    constructor(field: FunixBotUserExpFields, operation: SearchEnum, value: any) {
        this.search = `${field}:${operation}:${value}`;
    }
}

export class PaginationSort {
    sort: string;

    constructor(field: FunixBotUserExpFields, direction: SortEnum) {
        this.sort = `${field}:${direction}`;
    }
}