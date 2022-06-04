import { Block, Transaction } from "../types";
import {
  ArBlock,
  ArTransaction
} from "@subql/types-arweave";

export async function handleBlock(block: ArBlock): Promise<void> {
  const record = new Block(block.block.hash);
  record.id = block.block.hash;
  record.height = BigInt(block.block.height);
}

export async function handleTransaction(tx: ArTransaction): Promise<void> {
  const record = new Transaction(tx.tx.hash);
  record.blockHeight = BigInt(tx.block.block.height);
  record.timestamp = tx.block.block.timestamp.toString();
  record.tags = tx.tags.toString();
  record.data = tx.tags.toString();
  await record.save();
}
