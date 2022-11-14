/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DeleteTototestArgs } from "./DeleteTototestArgs";
import { TototestFindManyArgs } from "./TototestFindManyArgs";
import { TototestFindUniqueArgs } from "./TototestFindUniqueArgs";
import { Tototest } from "./Tototest";
import { TototestService } from "../tototest.service";

@graphql.Resolver(() => Tototest)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TototestResolverBase {
  constructor(
    protected readonly service: TototestService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Tototest",
    action: "read",
    possession: "any",
  })
  async _tototestsMeta(
    @graphql.Args() args: TototestFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Tototest])
  @nestAccessControl.UseRoles({
    resource: "Tototest",
    action: "read",
    possession: "any",
  })
  async tototests(
    @graphql.Args() args: TototestFindManyArgs
  ): Promise<Tototest[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Tototest, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Tototest",
    action: "read",
    possession: "own",
  })
  async tototest(
    @graphql.Args() args: TototestFindUniqueArgs
  ): Promise<Tototest | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Tototest)
  @nestAccessControl.UseRoles({
    resource: "Tototest",
    action: "delete",
    possession: "any",
  })
  async deleteTototest(
    @graphql.Args() args: DeleteTototestArgs
  ): Promise<Tototest | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
