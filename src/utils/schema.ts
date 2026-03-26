import { z } from "zod";
import zodToJsonSchema from "zod-to-json-schema";

/**
 * 将 Zod schema 转换为 JSON schema。
 * @param schema Zod schema 对象
 * @param name 可选的 schema 名称
 * @returns JSON schema 对象
 */
export function convertZodToJsonSchema(
  schema: z.ZodTypeAny,
  name?: string
): object {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const jsonSchema = zodToJsonSchema(schema as any, name);
  return jsonSchema;
}
