import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { TototestServiceBase } from "./base/tototest.service.base";

@Injectable()
export class TototestService extends TototestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
