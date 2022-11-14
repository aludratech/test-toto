import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { TototestResolverBase } from "./base/tototest.resolver.base";
import { Tototest } from "./base/Tototest";
import { TototestService } from "./tototest.service";

@graphql.Resolver(() => Tototest)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TototestResolver extends TototestResolverBase {
  constructor(
    protected readonly service: TototestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
