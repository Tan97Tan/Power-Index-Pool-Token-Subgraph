import { BigInt } from "@graphprotocol/graph-ts"
import {
  PowerIndexPool,
  Approval,
  MinterAdded,
  MinterRemoved,
  Paused,
  PauserAdded,
  PauserRemoved,
  Transfer,
  Unpaused
} from "../generated/PowerIndexPool/PowerIndexPool"
import { Approval_, Transfer_, Paused_, Unpaused_ } from "../generated/schema"

export function handleApproval(event: Approval): void {
  let entity = Approval_.load(event.params.owner.toHex())

  if (entity == null) {
    entity = new Approval_(event.params.owner.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value
  entity.save()
}

export function handleMinterAdded(event: MinterAdded): void {}

export function handleMinterRemoved(event: MinterRemoved): void {}

export function handlePaused(event: Paused): void {
  let entity = Paused_.load(event.params.account.toHex())

  if (entity == null) {
    entity = new Paused_(event.params.account.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.account = event.params.account
  entity.save()
}

export function handlePauserAdded(event: PauserAdded): void {}

export function handlePauserRemoved(event: PauserRemoved): void {}

export function handleTransfer(event: Transfer): void {
  let entity = Transfer_.load(event.params.from.toHex())

  if (entity == null) {
    entity = new Transfer_(event.params.from.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value
  entity.save()
}

export function handleUnpaused(event: Unpaused): void {
  let entity = Unpaused_.load(event.params.account.toHex())

  if (entity == null) {
    entity = new Unpaused_(event.params.account.toHex())
    entity.count = BigInt.fromI32(0)
  }

  entity.count = entity.count + BigInt.fromI32(1)
  entity.account = event.params.account
  entity.save()
}