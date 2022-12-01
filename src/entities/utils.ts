import { Factory, Transaction } from "../model"
import { EventHandlerContext } from "../types"

export async function getFactory(ctx: EventHandlerContext) {
  const factory = await ctx.store.get(Factory, '1')

  return factory
}

export async function getTransaction(ctx: EventHandlerContext, id: string) {
  const item = await ctx.store.get(Transaction, id)

  return item
}
