import { Module } from "@nestjs/common";
import { TototestModuleBase } from "./base/tototest.module.base";
import { TototestService } from "./tototest.service";
import { TototestResolver } from "./tototest.resolver";

@Module({
  imports: [TototestModuleBase],
  providers: [TototestService, TototestResolver],
  exports: [TototestService],
})
export class TototestModule {}
