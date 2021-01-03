import {
  DMMF,
  DMMFClass,
  Engine,
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  sqltag as sql,
  empty,
  join,
  raw,
  Sql,
  Decimal,
} from './runtime';

export { PrismaClientKnownRequestError }
export { PrismaClientUnknownRequestError }
export { PrismaClientRustPanicError }
export { PrismaClientInitializationError }
export { PrismaClientValidationError }
export { Decimal }

/**
 * Re-export of sql-template-tag
 */
export { sql, empty, join, raw, Sql }

/**
 * Prisma Client JS version: 2.10.2
 * Query Engine version: 7d0087eadc7265e12d4b8d8c3516b02c4c965111
 */
export declare type PrismaVersion = {
  client: string
}

export declare const prismaVersion: PrismaVersion 

/**
 * Utility Types
 */

/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches a JSON object.
 * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
 */
export declare type JsonObject = {[Key in string]?: JsonValue}
 
/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches a JSON array.
 */
export declare interface JsonArray extends Array<JsonValue> {}
 
/**
 * From https://github.com/sindresorhus/type-fest/
 * Matches any valid JSON value.
 */
export declare type JsonValue = string | number | boolean | null | JsonObject | JsonArray

/**
 * Same as JsonObject, but allows undefined
 */
export declare type InputJsonObject = {[Key in string]?: JsonValue}
 
export declare interface InputJsonArray extends Array<JsonValue> {}
 
export declare type InputJsonValue = undefined |  string | number | boolean | null | InputJsonObject | InputJsonArray

declare type SelectAndInclude = {
  select: any
  include: any
}

declare type HasSelect = {
  select: any
}

declare type HasInclude = {
  include: any
}

declare type CheckSelect<T, S, U> = T extends SelectAndInclude
  ? 'Please either choose `select` or `include`'
  : T extends HasSelect
  ? U
  : T extends HasInclude
  ? U
  : S

/**
 * Get the type of the value, that the Promise holds.
 */
export declare type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

/**
 * Get the return type of a function which returns a Promise.
 */
export declare type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>


export declare type Enumerable<T> = T | Array<T>;

export type RequiredKeys<T> = {
  [K in keyof T]-?: {} extends Pick<T, K> ? never : K
}[keyof T]

export declare type TruthyKeys<T> = {
  [key in keyof T]: T[key] extends false | undefined | null ? never : key
}[keyof T]

export declare type TrueKeys<T> = TruthyKeys<Pick<T, RequiredKeys<T>>>

/**
 * Subset
 * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
 */
export declare type Subset<T, U> = {
  [key in keyof T]: key extends keyof U ? T[key] : never;
};
declare class PrismaClientFetcher {
  private readonly prisma;
  private readonly debug;
  private readonly hooks?;
  constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
  request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
  sanitizeMessage(message: string): string;
  protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
}


/**
 * Client
**/

export declare type Datasource = {
  url?: string
}

export type Datasources = {
  db?: Datasource
}

export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

export interface PrismaClientOptions {
  /**
   * Overwrites the datasource url from your prisma.schema file
   */
  datasources?: Datasources

  /**
   * @default "colorless"
   */
  errorFormat?: ErrorFormat

  /**
   * @example
   * ```
   * // Defaults to stdout
   * log: ['query', 'info', 'warn', 'error']
   * 
   * // Emit as events
   * log: [
   *  { emit: 'stdout', level: 'query' },
   *  { emit: 'stdout', level: 'info' },
   *  { emit: 'stdout', level: 'warn' }
   *  { emit: 'stdout', level: 'error' }
   * ]
   * ```
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
   */
  log?: Array<LogLevel | LogDefinition>
}

export type Hooks = {
  beforeRequest?: (options: {query: string, path: string[], rootField?: string, typeName?: string, document: any}) => any
}

/* Types for Logging */
export type LogLevel = 'info' | 'query' | 'warn' | 'error'
export type LogDefinition = {
  level: LogLevel
  emit: 'stdout' | 'event'
}

export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
  GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
  : never

export type QueryEvent = {
  timestamp: Date
  query: string
  params: string
  duration: number
  target: string
}

export type LogEvent = {
  timestamp: Date
  message: string
  target: string
}
/* End Types for Logging */


export type PrismaAction =
  | 'findOne'
  | 'findMany'
  | 'findFirst'
  | 'create'
  | 'update'
  | 'updateMany'
  | 'upsert'
  | 'delete'
  | 'deleteMany'
  | 'executeRaw'
  | 'queryRaw'
  | 'aggregate'

/**
 * These options are being passed in to the middleware as "params"
 */
export type MiddlewareParams = {
  model?: string
  action: PrismaAction
  args: any
  dataPath: string[]
  runInTransaction: boolean
}

/**
 * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
 */
export type Middleware<T = any> = (
  params: MiddlewareParams,
  next: (params: MiddlewareParams) => Promise<T>,
) => Promise<T>

// tested in getLogLevel.test.ts
export declare function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js (ORM replacement)
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CrusadeArmies
 * const crusadeArmies = await prisma.crusadeArmy.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export declare class PrismaClient<
  T extends PrismaClientOptions = PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<LogLevel | LogDefinition> ? GetEvents<T['log']> : never : never
> {
  /**
   * @private
   */
  private fetcher;
  /**
   * @private
   */
  private readonly dmmf;
  /**
   * @private
   */
  private connectionPromise?;
  /**
   * @private
   */
  private disconnectionPromise?;
  /**
   * @private
   */
  private readonly engineConfig;
  /**
   * @private
   */
  private readonly measurePerformance;
  /**
   * @private
   */
  private engine: Engine;
  /**
   * @private
   */
  private errorFormat: ErrorFormat;

  /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js (ORM replacement)
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more CrusadeArmies
   * const crusadeArmies = await prisma.crusadeArmy.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */
  constructor(optionsArg?: T);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? QueryEvent : LogEvent) => void): void;
  /**
   * @deprecated renamed to `$on`
   */
  on<V extends U>(eventType: V, callback: (event: V extends 'query' ? QueryEvent : LogEvent) => void): void;
  /**
   * Connect with the database
   */
  $connect(): Promise<void>;
  /**
   * @deprecated renamed to `$connect`
   */
  connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<any>;
  /**
   * @deprecated renamed to `$disconnect`
   */
  disconnect(): Promise<any>;

  /**
   * Add a middleware
   */
  $use(cb: Middleware): void

  /**
   * Executes a raw query and returns the number of affected rows
   * @example
   * ```
   * // With parameters use prisma.executeRaw``, values will be escaped automatically
   * const result = await prisma.executeRaw`UPDATE User SET cool = ${true} WHERE id = ${1};`
   * // Or
   * const result = await prisma.executeRaw('UPDATE User SET cool = $1 WHERE id = $2 ;', true, 1)
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $executeRaw<T = any>(query: string | TemplateStringsArray | Sql, ...values: any[]): Promise<number>;

  /**
   * @deprecated renamed to `$executeRaw`
   */
  executeRaw<T = any>(query: string | TemplateStringsArray | Sql, ...values: any[]): Promise<number>;

  /**
   * Performs a raw query and returns the SELECT data
   * @example
   * ```
   * // With parameters use prisma.queryRaw``, values will be escaped automatically
   * const result = await prisma.queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'ema.il'};`
   * // Or
   * const result = await prisma.queryRaw('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'ema.il')
  * ```
  * 
  * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
  */
  $queryRaw<T = any>(query: string | TemplateStringsArray | Sql, ...values: any[]): Promise<T>;
 
  /**
   * @deprecated renamed to `$queryRaw`
   */
  queryRaw<T = any>(query: string | TemplateStringsArray | Sql, ...values: any[]): Promise<T>;

  /**
   * Execute queries in a transaction
   * @example
   * ```
   * const [george, bob, alice] = await prisma.transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   */
  $transaction: PromiseConstructor['all']
  /**
   * @deprecated renamed to `$transaction`
   */
  transaction: PromiseConstructor['all']

  /**
   * `prisma.crusadeArmy`: Exposes CRUD operations for the **CrusadeArmy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CrusadeArmies
    * const crusadeArmies = await prisma.crusadeArmy.findMany()
    * ```
    */
  get crusadeArmy(): CrusadeArmyDelegate;

  /**
   * `prisma.nameEffect`: Exposes CRUD operations for the **NameEffect** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NameEffects
    * const nameEffects = await prisma.nameEffect.findMany()
    * ```
    */
  get nameEffect(): NameEffectDelegate;

  /**
   * `prisma.crusadeUnit`: Exposes CRUD operations for the **CrusadeUnit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CrusadeUnits
    * const crusadeUnits = await prisma.crusadeUnit.findMany()
    * ```
    */
  get crusadeUnit(): CrusadeUnitDelegate;

  /**
   * `prisma.battleHonour`: Exposes CRUD operations for the **BattleHonour** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BattleHonours
    * const battleHonours = await prisma.battleHonour.findMany()
    * ```
    */
  get battleHonour(): BattleHonourDelegate;

  /**
   * `prisma.otherTrait`: Exposes CRUD operations for the **OtherTrait** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OtherTraits
    * const otherTraits = await prisma.otherTrait.findMany()
    * ```
    */
  get otherTrait(): OtherTraitDelegate;
}



/**
 * Enums
 */

// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

export declare const CrusadeArmyDistinctFieldEnum: {
  id: 'id',
  requisitionPoints: 'requisitionPoints',
  traitColor: 'traitColor',
  maximumPowerLevel: 'maximumPowerLevel',
  createdAt: 'createdAt',
  name: 'name',
  detachmentTraitId: 'detachmentTraitId'
};

export declare type CrusadeArmyDistinctFieldEnum = (typeof CrusadeArmyDistinctFieldEnum)[keyof typeof CrusadeArmyDistinctFieldEnum]


export declare const NameEffectDistinctFieldEnum: {
  id: 'id',
  name: 'name',
  effect: 'effect',
  otherTraitId: 'otherTraitId'
};

export declare type NameEffectDistinctFieldEnum = (typeof NameEffectDistinctFieldEnum)[keyof typeof NameEffectDistinctFieldEnum]


export declare const CrusadeUnitDistinctFieldEnum: {
  id: 'id',
  name: 'name',
  alternateName: 'alternateName',
  agendaXp: 'agendaXp',
  battleParticipation: 'battleParticipation',
  experienceLoss: 'experienceLoss',
  kills: 'kills',
  markedForGreatness: 'markedForGreatness',
  notes: 'notes',
  powerLevel: 'powerLevel',
  relicId: 'relicId',
  sequenceNumber: 'sequenceNumber',
  warlordTraitId: 'warlordTraitId',
  crusadeArmyId: 'crusadeArmyId'
};

export declare type CrusadeUnitDistinctFieldEnum = (typeof CrusadeUnitDistinctFieldEnum)[keyof typeof CrusadeUnitDistinctFieldEnum]


export declare const BattleHonourDistinctFieldEnum: {
  id: 'id',
  crusadePoints: 'crusadePoints',
  battleTraitId: 'battleTraitId',
  rank: 'rank',
  crusadeUnitId: 'crusadeUnitId'
};

export declare type BattleHonourDistinctFieldEnum = (typeof BattleHonourDistinctFieldEnum)[keyof typeof BattleHonourDistinctFieldEnum]


export declare const OtherTraitDistinctFieldEnum: {
  id: 'id',
  name: 'name'
};

export declare type OtherTraitDistinctFieldEnum = (typeof OtherTraitDistinctFieldEnum)[keyof typeof OtherTraitDistinctFieldEnum]


export declare const SortOrder: {
  asc: 'asc',
  desc: 'desc'
};

export declare type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]



/**
 * Model CrusadeArmy
 */

export type CrusadeArmy = {
  id: number
  requisitionPoints: number
  traitColor: string
  maximumPowerLevel: number
  createdAt: Date
  name: string
  detachmentTraitId: number | null
}


export type AggregateCrusadeArmy = {
  count: number
  avg: CrusadeArmyAvgAggregateOutputType | null
  sum: CrusadeArmySumAggregateOutputType | null
  min: CrusadeArmyMinAggregateOutputType | null
  max: CrusadeArmyMaxAggregateOutputType | null
}

export type CrusadeArmyAvgAggregateOutputType = {
  id: number
  requisitionPoints: number
  maximumPowerLevel: number
  detachmentTraitId: number | null
}

export type CrusadeArmySumAggregateOutputType = {
  id: number
  requisitionPoints: number
  maximumPowerLevel: number
  detachmentTraitId: number | null
}

export type CrusadeArmyMinAggregateOutputType = {
  id: number
  requisitionPoints: number
  maximumPowerLevel: number
  detachmentTraitId: number | null
}

export type CrusadeArmyMaxAggregateOutputType = {
  id: number
  requisitionPoints: number
  maximumPowerLevel: number
  detachmentTraitId: number | null
}


export type CrusadeArmyAvgAggregateInputType = {
  id?: true
  requisitionPoints?: true
  maximumPowerLevel?: true
  detachmentTraitId?: true
}

export type CrusadeArmySumAggregateInputType = {
  id?: true
  requisitionPoints?: true
  maximumPowerLevel?: true
  detachmentTraitId?: true
}

export type CrusadeArmyMinAggregateInputType = {
  id?: true
  requisitionPoints?: true
  maximumPowerLevel?: true
  detachmentTraitId?: true
}

export type CrusadeArmyMaxAggregateInputType = {
  id?: true
  requisitionPoints?: true
  maximumPowerLevel?: true
  detachmentTraitId?: true
}

export type AggregateCrusadeArmyArgs = {
  where?: CrusadeArmyWhereInput
  orderBy?: Enumerable<CrusadeArmyOrderByInput> | CrusadeArmyOrderByInput
  cursor?: CrusadeArmyWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<CrusadeArmyDistinctFieldEnum>
  count?: true
  avg?: CrusadeArmyAvgAggregateInputType
  sum?: CrusadeArmySumAggregateInputType
  min?: CrusadeArmyMinAggregateInputType
  max?: CrusadeArmyMaxAggregateInputType
}

export type GetCrusadeArmyAggregateType<T extends AggregateCrusadeArmyArgs> = {
  [P in keyof T]: P extends 'count' ? number : GetCrusadeArmyAggregateScalarType<T[P]>
}

export type GetCrusadeArmyAggregateScalarType<T extends any> = {
  [P in keyof T]: P extends keyof CrusadeArmyAvgAggregateOutputType ? CrusadeArmyAvgAggregateOutputType[P] : never
}
    
    

export type CrusadeArmySelect = {
  id?: boolean
  requisitionPoints?: boolean
  traitColor?: boolean
  maximumPowerLevel?: boolean
  createdAt?: boolean
  name?: boolean
  detachmentTrait?: boolean | NameEffectArgs
  detachmentTraitId?: boolean
  units?: boolean | FindManyCrusadeUnitArgs
}

export type CrusadeArmyInclude = {
  detachmentTrait?: boolean | NameEffectArgs
  units?: boolean | FindManyCrusadeUnitArgs
}

export type CrusadeArmyGetPayload<
  S extends boolean | null | undefined | CrusadeArmyArgs,
  U = keyof S
> = S extends true
  ? CrusadeArmy
  : S extends undefined
  ? never
  : S extends CrusadeArmyArgs | FindManyCrusadeArmyArgs
  ? 'include' extends U
    ? CrusadeArmy  & {
      [P in TrueKeys<S['include']>]:
      P extends 'detachmentTrait'
      ? NameEffectGetPayload<S['include'][P]> | null :
      P extends 'units'
      ? Array<CrusadeUnitGetPayload<S['include'][P]>> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof CrusadeArmy ? CrusadeArmy[P]
: 
      P extends 'detachmentTrait'
      ? NameEffectGetPayload<S['select'][P]> | null :
      P extends 'units'
      ? Array<CrusadeUnitGetPayload<S['select'][P]>> : never
    }
  : CrusadeArmy
: CrusadeArmy


export interface CrusadeArmyDelegate {
  /**
   * Find zero or one CrusadeArmy that matches the filter.
   * @param {FindOneCrusadeArmyArgs} args - Arguments to find a CrusadeArmy
   * @example
   * // Get one CrusadeArmy
   * const crusadeArmy = await prisma.crusadeArmy.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneCrusadeArmyArgs>(
    args: Subset<T, FindOneCrusadeArmyArgs>
  ): CheckSelect<T, Prisma__CrusadeArmyClient<CrusadeArmy | null>, Prisma__CrusadeArmyClient<CrusadeArmyGetPayload<T> | null>>
  /**
   * Find the first CrusadeArmy that matches the filter.
   * @param {FindFirstCrusadeArmyArgs} args - Arguments to find a CrusadeArmy
   * @example
   * // Get one CrusadeArmy
   * const crusadeArmy = await prisma.crusadeArmy.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findFirst<T extends FindFirstCrusadeArmyArgs>(
    args?: Subset<T, FindFirstCrusadeArmyArgs>
  ): CheckSelect<T, Prisma__CrusadeArmyClient<CrusadeArmy | null>, Prisma__CrusadeArmyClient<CrusadeArmyGetPayload<T> | null>>
  /**
   * Find zero or more CrusadeArmies that matches the filter.
   * @param {FindManyCrusadeArmyArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all CrusadeArmies
   * const crusadeArmies = await prisma.crusadeArmy.findMany()
   * 
   * // Get first 10 CrusadeArmies
   * const crusadeArmies = await prisma.crusadeArmy.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const crusadeArmyWithIdOnly = await prisma.crusadeArmy.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyCrusadeArmyArgs>(
    args?: Subset<T, FindManyCrusadeArmyArgs>
  ): CheckSelect<T, Promise<Array<CrusadeArmy>>, Promise<Array<CrusadeArmyGetPayload<T>>>>
  /**
   * Create a CrusadeArmy.
   * @param {CrusadeArmyCreateArgs} args - Arguments to create a CrusadeArmy.
   * @example
   * // Create one CrusadeArmy
   * const CrusadeArmy = await prisma.crusadeArmy.create({
   *   data: {
   *     // ... data to create a CrusadeArmy
   *   }
   * })
   * 
  **/
  create<T extends CrusadeArmyCreateArgs>(
    args: Subset<T, CrusadeArmyCreateArgs>
  ): CheckSelect<T, Prisma__CrusadeArmyClient<CrusadeArmy>, Prisma__CrusadeArmyClient<CrusadeArmyGetPayload<T>>>
  /**
   * Delete a CrusadeArmy.
   * @param {CrusadeArmyDeleteArgs} args - Arguments to delete one CrusadeArmy.
   * @example
   * // Delete one CrusadeArmy
   * const CrusadeArmy = await prisma.crusadeArmy.delete({
   *   where: {
   *     // ... filter to delete one CrusadeArmy
   *   }
   * })
   * 
  **/
  delete<T extends CrusadeArmyDeleteArgs>(
    args: Subset<T, CrusadeArmyDeleteArgs>
  ): CheckSelect<T, Prisma__CrusadeArmyClient<CrusadeArmy>, Prisma__CrusadeArmyClient<CrusadeArmyGetPayload<T>>>
  /**
   * Update one CrusadeArmy.
   * @param {CrusadeArmyUpdateArgs} args - Arguments to update one CrusadeArmy.
   * @example
   * // Update one CrusadeArmy
   * const crusadeArmy = await prisma.crusadeArmy.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends CrusadeArmyUpdateArgs>(
    args: Subset<T, CrusadeArmyUpdateArgs>
  ): CheckSelect<T, Prisma__CrusadeArmyClient<CrusadeArmy>, Prisma__CrusadeArmyClient<CrusadeArmyGetPayload<T>>>
  /**
   * Delete zero or more CrusadeArmies.
   * @param {CrusadeArmyDeleteManyArgs} args - Arguments to filter CrusadeArmies to delete.
   * @example
   * // Delete a few CrusadeArmies
   * const { count } = await prisma.crusadeArmy.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends CrusadeArmyDeleteManyArgs>(
    args: Subset<T, CrusadeArmyDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more CrusadeArmies.
   * @param {CrusadeArmyUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many CrusadeArmies
   * const crusadeArmy = await prisma.crusadeArmy.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends CrusadeArmyUpdateManyArgs>(
    args: Subset<T, CrusadeArmyUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one CrusadeArmy.
   * @param {CrusadeArmyUpsertArgs} args - Arguments to update or create a CrusadeArmy.
   * @example
   * // Update or create a CrusadeArmy
   * const crusadeArmy = await prisma.crusadeArmy.upsert({
   *   create: {
   *     // ... data to create a CrusadeArmy
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the CrusadeArmy we want to update
   *   }
   * })
  **/
  upsert<T extends CrusadeArmyUpsertArgs>(
    args: Subset<T, CrusadeArmyUpsertArgs>
  ): CheckSelect<T, Prisma__CrusadeArmyClient<CrusadeArmy>, Prisma__CrusadeArmyClient<CrusadeArmyGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManyCrusadeArmyArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregateCrusadeArmyArgs>(args: Subset<T, AggregateCrusadeArmyArgs>): Promise<GetCrusadeArmyAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for CrusadeArmy.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__CrusadeArmyClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  detachmentTrait<T extends NameEffectArgs = {}>(args?: Subset<T, NameEffectArgs>): CheckSelect<T, Prisma__NameEffectClient<NameEffect | null>, Prisma__NameEffectClient<NameEffectGetPayload<T> | null>>;

  units<T extends FindManyCrusadeUnitArgs = {}>(args?: Subset<T, FindManyCrusadeUnitArgs>): CheckSelect<T, Promise<Array<CrusadeUnit>>, Promise<Array<CrusadeUnitGetPayload<T>>>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * CrusadeArmy findOne
 */
export type FindOneCrusadeArmyArgs = {
  /**
   * Select specific fields to fetch from the CrusadeArmy
  **/
  select?: CrusadeArmySelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: CrusadeArmyInclude | null
  /**
   * Filter, which CrusadeArmy to fetch.
  **/
  where: CrusadeArmyWhereUniqueInput
}


/**
 * CrusadeArmy findFirst
 */
export type FindFirstCrusadeArmyArgs = {
  /**
   * Select specific fields to fetch from the CrusadeArmy
  **/
  select?: CrusadeArmySelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: CrusadeArmyInclude | null
  /**
   * Filter, which CrusadeArmy to fetch.
  **/
  where?: CrusadeArmyWhereInput
  orderBy?: Enumerable<CrusadeArmyOrderByInput> | CrusadeArmyOrderByInput
  cursor?: CrusadeArmyWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<CrusadeArmyDistinctFieldEnum>
}


/**
 * CrusadeArmy findMany
 */
export type FindManyCrusadeArmyArgs = {
  /**
   * Select specific fields to fetch from the CrusadeArmy
  **/
  select?: CrusadeArmySelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: CrusadeArmyInclude | null
  /**
   * Filter, which CrusadeArmies to fetch.
  **/
  where?: CrusadeArmyWhereInput
  /**
   * Determine the order of the CrusadeArmies to fetch.
  **/
  orderBy?: Enumerable<CrusadeArmyOrderByInput> | CrusadeArmyOrderByInput
  /**
   * Sets the position for listing CrusadeArmies.
  **/
  cursor?: CrusadeArmyWhereUniqueInput
  /**
   * The number of CrusadeArmies to fetch. If negative number, it will take CrusadeArmies before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` CrusadeArmies.
  **/
  skip?: number
  distinct?: Enumerable<CrusadeArmyDistinctFieldEnum>
}


/**
 * CrusadeArmy create
 */
export type CrusadeArmyCreateArgs = {
  /**
   * Select specific fields to fetch from the CrusadeArmy
  **/
  select?: CrusadeArmySelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: CrusadeArmyInclude | null
  /**
   * The data needed to create a CrusadeArmy.
  **/
  data: CrusadeArmyCreateInput
}


/**
 * CrusadeArmy update
 */
export type CrusadeArmyUpdateArgs = {
  /**
   * Select specific fields to fetch from the CrusadeArmy
  **/
  select?: CrusadeArmySelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: CrusadeArmyInclude | null
  /**
   * The data needed to update a CrusadeArmy.
  **/
  data: CrusadeArmyUpdateInput
  /**
   * Choose, which CrusadeArmy to update.
  **/
  where: CrusadeArmyWhereUniqueInput
}


/**
 * CrusadeArmy updateMany
 */
export type CrusadeArmyUpdateManyArgs = {
  data: CrusadeArmyUpdateManyMutationInput
  where?: CrusadeArmyWhereInput
}


/**
 * CrusadeArmy upsert
 */
export type CrusadeArmyUpsertArgs = {
  /**
   * Select specific fields to fetch from the CrusadeArmy
  **/
  select?: CrusadeArmySelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: CrusadeArmyInclude | null
  /**
   * The filter to search for the CrusadeArmy to update in case it exists.
  **/
  where: CrusadeArmyWhereUniqueInput
  /**
   * In case the CrusadeArmy found by the `where` argument doesn't exist, create a new CrusadeArmy with this data.
  **/
  create: CrusadeArmyCreateInput
  /**
   * In case the CrusadeArmy was found with the provided `where` argument, update it with this data.
  **/
  update: CrusadeArmyUpdateInput
}


/**
 * CrusadeArmy delete
 */
export type CrusadeArmyDeleteArgs = {
  /**
   * Select specific fields to fetch from the CrusadeArmy
  **/
  select?: CrusadeArmySelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: CrusadeArmyInclude | null
  /**
   * Filter which CrusadeArmy to delete.
  **/
  where: CrusadeArmyWhereUniqueInput
}


/**
 * CrusadeArmy deleteMany
 */
export type CrusadeArmyDeleteManyArgs = {
  where?: CrusadeArmyWhereInput
}


/**
 * CrusadeArmy without action
 */
export type CrusadeArmyArgs = {
  /**
   * Select specific fields to fetch from the CrusadeArmy
  **/
  select?: CrusadeArmySelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: CrusadeArmyInclude | null
}



/**
 * Model NameEffect
 */

export type NameEffect = {
  id: number
  name: string
  effect: string
  otherTraitId: number | null
}


export type AggregateNameEffect = {
  count: number
  avg: NameEffectAvgAggregateOutputType | null
  sum: NameEffectSumAggregateOutputType | null
  min: NameEffectMinAggregateOutputType | null
  max: NameEffectMaxAggregateOutputType | null
}

export type NameEffectAvgAggregateOutputType = {
  id: number
  otherTraitId: number | null
}

export type NameEffectSumAggregateOutputType = {
  id: number
  otherTraitId: number | null
}

export type NameEffectMinAggregateOutputType = {
  id: number
  otherTraitId: number | null
}

export type NameEffectMaxAggregateOutputType = {
  id: number
  otherTraitId: number | null
}


export type NameEffectAvgAggregateInputType = {
  id?: true
  otherTraitId?: true
}

export type NameEffectSumAggregateInputType = {
  id?: true
  otherTraitId?: true
}

export type NameEffectMinAggregateInputType = {
  id?: true
  otherTraitId?: true
}

export type NameEffectMaxAggregateInputType = {
  id?: true
  otherTraitId?: true
}

export type AggregateNameEffectArgs = {
  where?: NameEffectWhereInput
  orderBy?: Enumerable<NameEffectOrderByInput> | NameEffectOrderByInput
  cursor?: NameEffectWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<NameEffectDistinctFieldEnum>
  count?: true
  avg?: NameEffectAvgAggregateInputType
  sum?: NameEffectSumAggregateInputType
  min?: NameEffectMinAggregateInputType
  max?: NameEffectMaxAggregateInputType
}

export type GetNameEffectAggregateType<T extends AggregateNameEffectArgs> = {
  [P in keyof T]: P extends 'count' ? number : GetNameEffectAggregateScalarType<T[P]>
}

export type GetNameEffectAggregateScalarType<T extends any> = {
  [P in keyof T]: P extends keyof NameEffectAvgAggregateOutputType ? NameEffectAvgAggregateOutputType[P] : never
}
    
    

export type NameEffectSelect = {
  id?: boolean
  name?: boolean
  effect?: boolean
  CrusadeArmy?: boolean | FindManyCrusadeArmyArgs
  Relic?: boolean | FindManyCrusadeUnitArgs
  WarlordTrait?: boolean | FindManyCrusadeUnitArgs
  BattleHonour?: boolean | FindManyBattleHonourArgs
  OtherTrait?: boolean | OtherTraitArgs
  otherTraitId?: boolean
}

export type NameEffectInclude = {
  CrusadeArmy?: boolean | FindManyCrusadeArmyArgs
  Relic?: boolean | FindManyCrusadeUnitArgs
  WarlordTrait?: boolean | FindManyCrusadeUnitArgs
  BattleHonour?: boolean | FindManyBattleHonourArgs
  OtherTrait?: boolean | OtherTraitArgs
}

export type NameEffectGetPayload<
  S extends boolean | null | undefined | NameEffectArgs,
  U = keyof S
> = S extends true
  ? NameEffect
  : S extends undefined
  ? never
  : S extends NameEffectArgs | FindManyNameEffectArgs
  ? 'include' extends U
    ? NameEffect  & {
      [P in TrueKeys<S['include']>]:
      P extends 'CrusadeArmy'
      ? Array<CrusadeArmyGetPayload<S['include'][P]>> :
      P extends 'Relic'
      ? Array<CrusadeUnitGetPayload<S['include'][P]>> :
      P extends 'WarlordTrait'
      ? Array<CrusadeUnitGetPayload<S['include'][P]>> :
      P extends 'BattleHonour'
      ? Array<BattleHonourGetPayload<S['include'][P]>> :
      P extends 'OtherTrait'
      ? OtherTraitGetPayload<S['include'][P]> | null : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof NameEffect ? NameEffect[P]
: 
      P extends 'CrusadeArmy'
      ? Array<CrusadeArmyGetPayload<S['select'][P]>> :
      P extends 'Relic'
      ? Array<CrusadeUnitGetPayload<S['select'][P]>> :
      P extends 'WarlordTrait'
      ? Array<CrusadeUnitGetPayload<S['select'][P]>> :
      P extends 'BattleHonour'
      ? Array<BattleHonourGetPayload<S['select'][P]>> :
      P extends 'OtherTrait'
      ? OtherTraitGetPayload<S['select'][P]> | null : never
    }
  : NameEffect
: NameEffect


export interface NameEffectDelegate {
  /**
   * Find zero or one NameEffect that matches the filter.
   * @param {FindOneNameEffectArgs} args - Arguments to find a NameEffect
   * @example
   * // Get one NameEffect
   * const nameEffect = await prisma.nameEffect.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneNameEffectArgs>(
    args: Subset<T, FindOneNameEffectArgs>
  ): CheckSelect<T, Prisma__NameEffectClient<NameEffect | null>, Prisma__NameEffectClient<NameEffectGetPayload<T> | null>>
  /**
   * Find the first NameEffect that matches the filter.
   * @param {FindFirstNameEffectArgs} args - Arguments to find a NameEffect
   * @example
   * // Get one NameEffect
   * const nameEffect = await prisma.nameEffect.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findFirst<T extends FindFirstNameEffectArgs>(
    args?: Subset<T, FindFirstNameEffectArgs>
  ): CheckSelect<T, Prisma__NameEffectClient<NameEffect | null>, Prisma__NameEffectClient<NameEffectGetPayload<T> | null>>
  /**
   * Find zero or more NameEffects that matches the filter.
   * @param {FindManyNameEffectArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all NameEffects
   * const nameEffects = await prisma.nameEffect.findMany()
   * 
   * // Get first 10 NameEffects
   * const nameEffects = await prisma.nameEffect.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const nameEffectWithIdOnly = await prisma.nameEffect.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyNameEffectArgs>(
    args?: Subset<T, FindManyNameEffectArgs>
  ): CheckSelect<T, Promise<Array<NameEffect>>, Promise<Array<NameEffectGetPayload<T>>>>
  /**
   * Create a NameEffect.
   * @param {NameEffectCreateArgs} args - Arguments to create a NameEffect.
   * @example
   * // Create one NameEffect
   * const NameEffect = await prisma.nameEffect.create({
   *   data: {
   *     // ... data to create a NameEffect
   *   }
   * })
   * 
  **/
  create<T extends NameEffectCreateArgs>(
    args: Subset<T, NameEffectCreateArgs>
  ): CheckSelect<T, Prisma__NameEffectClient<NameEffect>, Prisma__NameEffectClient<NameEffectGetPayload<T>>>
  /**
   * Delete a NameEffect.
   * @param {NameEffectDeleteArgs} args - Arguments to delete one NameEffect.
   * @example
   * // Delete one NameEffect
   * const NameEffect = await prisma.nameEffect.delete({
   *   where: {
   *     // ... filter to delete one NameEffect
   *   }
   * })
   * 
  **/
  delete<T extends NameEffectDeleteArgs>(
    args: Subset<T, NameEffectDeleteArgs>
  ): CheckSelect<T, Prisma__NameEffectClient<NameEffect>, Prisma__NameEffectClient<NameEffectGetPayload<T>>>
  /**
   * Update one NameEffect.
   * @param {NameEffectUpdateArgs} args - Arguments to update one NameEffect.
   * @example
   * // Update one NameEffect
   * const nameEffect = await prisma.nameEffect.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends NameEffectUpdateArgs>(
    args: Subset<T, NameEffectUpdateArgs>
  ): CheckSelect<T, Prisma__NameEffectClient<NameEffect>, Prisma__NameEffectClient<NameEffectGetPayload<T>>>
  /**
   * Delete zero or more NameEffects.
   * @param {NameEffectDeleteManyArgs} args - Arguments to filter NameEffects to delete.
   * @example
   * // Delete a few NameEffects
   * const { count } = await prisma.nameEffect.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends NameEffectDeleteManyArgs>(
    args: Subset<T, NameEffectDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more NameEffects.
   * @param {NameEffectUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many NameEffects
   * const nameEffect = await prisma.nameEffect.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends NameEffectUpdateManyArgs>(
    args: Subset<T, NameEffectUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one NameEffect.
   * @param {NameEffectUpsertArgs} args - Arguments to update or create a NameEffect.
   * @example
   * // Update or create a NameEffect
   * const nameEffect = await prisma.nameEffect.upsert({
   *   create: {
   *     // ... data to create a NameEffect
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the NameEffect we want to update
   *   }
   * })
  **/
  upsert<T extends NameEffectUpsertArgs>(
    args: Subset<T, NameEffectUpsertArgs>
  ): CheckSelect<T, Prisma__NameEffectClient<NameEffect>, Prisma__NameEffectClient<NameEffectGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManyNameEffectArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregateNameEffectArgs>(args: Subset<T, AggregateNameEffectArgs>): Promise<GetNameEffectAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for NameEffect.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__NameEffectClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  CrusadeArmy<T extends FindManyCrusadeArmyArgs = {}>(args?: Subset<T, FindManyCrusadeArmyArgs>): CheckSelect<T, Promise<Array<CrusadeArmy>>, Promise<Array<CrusadeArmyGetPayload<T>>>>;

  Relic<T extends FindManyCrusadeUnitArgs = {}>(args?: Subset<T, FindManyCrusadeUnitArgs>): CheckSelect<T, Promise<Array<CrusadeUnit>>, Promise<Array<CrusadeUnitGetPayload<T>>>>;

  WarlordTrait<T extends FindManyCrusadeUnitArgs = {}>(args?: Subset<T, FindManyCrusadeUnitArgs>): CheckSelect<T, Promise<Array<CrusadeUnit>>, Promise<Array<CrusadeUnitGetPayload<T>>>>;

  BattleHonour<T extends FindManyBattleHonourArgs = {}>(args?: Subset<T, FindManyBattleHonourArgs>): CheckSelect<T, Promise<Array<BattleHonour>>, Promise<Array<BattleHonourGetPayload<T>>>>;

  OtherTrait<T extends OtherTraitArgs = {}>(args?: Subset<T, OtherTraitArgs>): CheckSelect<T, Prisma__OtherTraitClient<OtherTrait | null>, Prisma__OtherTraitClient<OtherTraitGetPayload<T> | null>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * NameEffect findOne
 */
export type FindOneNameEffectArgs = {
  /**
   * Select specific fields to fetch from the NameEffect
  **/
  select?: NameEffectSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: NameEffectInclude | null
  /**
   * Filter, which NameEffect to fetch.
  **/
  where: NameEffectWhereUniqueInput
}


/**
 * NameEffect findFirst
 */
export type FindFirstNameEffectArgs = {
  /**
   * Select specific fields to fetch from the NameEffect
  **/
  select?: NameEffectSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: NameEffectInclude | null
  /**
   * Filter, which NameEffect to fetch.
  **/
  where?: NameEffectWhereInput
  orderBy?: Enumerable<NameEffectOrderByInput> | NameEffectOrderByInput
  cursor?: NameEffectWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<NameEffectDistinctFieldEnum>
}


/**
 * NameEffect findMany
 */
export type FindManyNameEffectArgs = {
  /**
   * Select specific fields to fetch from the NameEffect
  **/
  select?: NameEffectSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: NameEffectInclude | null
  /**
   * Filter, which NameEffects to fetch.
  **/
  where?: NameEffectWhereInput
  /**
   * Determine the order of the NameEffects to fetch.
  **/
  orderBy?: Enumerable<NameEffectOrderByInput> | NameEffectOrderByInput
  /**
   * Sets the position for listing NameEffects.
  **/
  cursor?: NameEffectWhereUniqueInput
  /**
   * The number of NameEffects to fetch. If negative number, it will take NameEffects before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` NameEffects.
  **/
  skip?: number
  distinct?: Enumerable<NameEffectDistinctFieldEnum>
}


/**
 * NameEffect create
 */
export type NameEffectCreateArgs = {
  /**
   * Select specific fields to fetch from the NameEffect
  **/
  select?: NameEffectSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: NameEffectInclude | null
  /**
   * The data needed to create a NameEffect.
  **/
  data: NameEffectCreateInput
}


/**
 * NameEffect update
 */
export type NameEffectUpdateArgs = {
  /**
   * Select specific fields to fetch from the NameEffect
  **/
  select?: NameEffectSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: NameEffectInclude | null
  /**
   * The data needed to update a NameEffect.
  **/
  data: NameEffectUpdateInput
  /**
   * Choose, which NameEffect to update.
  **/
  where: NameEffectWhereUniqueInput
}


/**
 * NameEffect updateMany
 */
export type NameEffectUpdateManyArgs = {
  data: NameEffectUpdateManyMutationInput
  where?: NameEffectWhereInput
}


/**
 * NameEffect upsert
 */
export type NameEffectUpsertArgs = {
  /**
   * Select specific fields to fetch from the NameEffect
  **/
  select?: NameEffectSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: NameEffectInclude | null
  /**
   * The filter to search for the NameEffect to update in case it exists.
  **/
  where: NameEffectWhereUniqueInput
  /**
   * In case the NameEffect found by the `where` argument doesn't exist, create a new NameEffect with this data.
  **/
  create: NameEffectCreateInput
  /**
   * In case the NameEffect was found with the provided `where` argument, update it with this data.
  **/
  update: NameEffectUpdateInput
}


/**
 * NameEffect delete
 */
export type NameEffectDeleteArgs = {
  /**
   * Select specific fields to fetch from the NameEffect
  **/
  select?: NameEffectSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: NameEffectInclude | null
  /**
   * Filter which NameEffect to delete.
  **/
  where: NameEffectWhereUniqueInput
}


/**
 * NameEffect deleteMany
 */
export type NameEffectDeleteManyArgs = {
  where?: NameEffectWhereInput
}


/**
 * NameEffect without action
 */
export type NameEffectArgs = {
  /**
   * Select specific fields to fetch from the NameEffect
  **/
  select?: NameEffectSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: NameEffectInclude | null
}



/**
 * Model CrusadeUnit
 */

export type CrusadeUnit = {
  id: number
  name: string
  alternateName: string | null
  agendaXp: number
  battleParticipation: number
  experienceLoss: number
  kills: number
  markedForGreatness: number
  notes: string | null
  powerLevel: number
  relicId: number | null
  sequenceNumber: number
  warlordTraitId: number | null
  crusadeArmyId: number | null
}


export type AggregateCrusadeUnit = {
  count: number
  avg: CrusadeUnitAvgAggregateOutputType | null
  sum: CrusadeUnitSumAggregateOutputType | null
  min: CrusadeUnitMinAggregateOutputType | null
  max: CrusadeUnitMaxAggregateOutputType | null
}

export type CrusadeUnitAvgAggregateOutputType = {
  id: number
  agendaXp: number
  battleParticipation: number
  experienceLoss: number
  kills: number
  markedForGreatness: number
  powerLevel: number
  relicId: number | null
  sequenceNumber: number
  warlordTraitId: number | null
  crusadeArmyId: number | null
}

export type CrusadeUnitSumAggregateOutputType = {
  id: number
  agendaXp: number
  battleParticipation: number
  experienceLoss: number
  kills: number
  markedForGreatness: number
  powerLevel: number
  relicId: number | null
  sequenceNumber: number
  warlordTraitId: number | null
  crusadeArmyId: number | null
}

export type CrusadeUnitMinAggregateOutputType = {
  id: number
  agendaXp: number
  battleParticipation: number
  experienceLoss: number
  kills: number
  markedForGreatness: number
  powerLevel: number
  relicId: number | null
  sequenceNumber: number
  warlordTraitId: number | null
  crusadeArmyId: number | null
}

export type CrusadeUnitMaxAggregateOutputType = {
  id: number
  agendaXp: number
  battleParticipation: number
  experienceLoss: number
  kills: number
  markedForGreatness: number
  powerLevel: number
  relicId: number | null
  sequenceNumber: number
  warlordTraitId: number | null
  crusadeArmyId: number | null
}


export type CrusadeUnitAvgAggregateInputType = {
  id?: true
  agendaXp?: true
  battleParticipation?: true
  experienceLoss?: true
  kills?: true
  markedForGreatness?: true
  powerLevel?: true
  relicId?: true
  sequenceNumber?: true
  warlordTraitId?: true
  crusadeArmyId?: true
}

export type CrusadeUnitSumAggregateInputType = {
  id?: true
  agendaXp?: true
  battleParticipation?: true
  experienceLoss?: true
  kills?: true
  markedForGreatness?: true
  powerLevel?: true
  relicId?: true
  sequenceNumber?: true
  warlordTraitId?: true
  crusadeArmyId?: true
}

export type CrusadeUnitMinAggregateInputType = {
  id?: true
  agendaXp?: true
  battleParticipation?: true
  experienceLoss?: true
  kills?: true
  markedForGreatness?: true
  powerLevel?: true
  relicId?: true
  sequenceNumber?: true
  warlordTraitId?: true
  crusadeArmyId?: true
}

export type CrusadeUnitMaxAggregateInputType = {
  id?: true
  agendaXp?: true
  battleParticipation?: true
  experienceLoss?: true
  kills?: true
  markedForGreatness?: true
  powerLevel?: true
  relicId?: true
  sequenceNumber?: true
  warlordTraitId?: true
  crusadeArmyId?: true
}

export type AggregateCrusadeUnitArgs = {
  where?: CrusadeUnitWhereInput
  orderBy?: Enumerable<CrusadeUnitOrderByInput> | CrusadeUnitOrderByInput
  cursor?: CrusadeUnitWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<CrusadeUnitDistinctFieldEnum>
  count?: true
  avg?: CrusadeUnitAvgAggregateInputType
  sum?: CrusadeUnitSumAggregateInputType
  min?: CrusadeUnitMinAggregateInputType
  max?: CrusadeUnitMaxAggregateInputType
}

export type GetCrusadeUnitAggregateType<T extends AggregateCrusadeUnitArgs> = {
  [P in keyof T]: P extends 'count' ? number : GetCrusadeUnitAggregateScalarType<T[P]>
}

export type GetCrusadeUnitAggregateScalarType<T extends any> = {
  [P in keyof T]: P extends keyof CrusadeUnitAvgAggregateOutputType ? CrusadeUnitAvgAggregateOutputType[P] : never
}
    
    

export type CrusadeUnitSelect = {
  id?: boolean
  name?: boolean
  alternateName?: boolean
  agendaXp?: boolean
  battleParticipation?: boolean
  experienceLoss?: boolean
  kills?: boolean
  markedForGreatness?: boolean
  notes?: boolean
  powerLevel?: boolean
  relic?: boolean | NameEffectArgs
  relicId?: boolean
  sequenceNumber?: boolean
  warlordTrait?: boolean | NameEffectArgs
  warlordTraitId?: boolean
  CrusadeArmy?: boolean | CrusadeArmyArgs
  crusadeArmyId?: boolean
  battleHonours?: boolean | FindManyBattleHonourArgs
  OtherTrait?: boolean | FindManyOtherTraitArgs
}

export type CrusadeUnitInclude = {
  relic?: boolean | NameEffectArgs
  warlordTrait?: boolean | NameEffectArgs
  CrusadeArmy?: boolean | CrusadeArmyArgs
  battleHonours?: boolean | FindManyBattleHonourArgs
  OtherTrait?: boolean | FindManyOtherTraitArgs
}

export type CrusadeUnitGetPayload<
  S extends boolean | null | undefined | CrusadeUnitArgs,
  U = keyof S
> = S extends true
  ? CrusadeUnit
  : S extends undefined
  ? never
  : S extends CrusadeUnitArgs | FindManyCrusadeUnitArgs
  ? 'include' extends U
    ? CrusadeUnit  & {
      [P in TrueKeys<S['include']>]:
      P extends 'relic'
      ? NameEffectGetPayload<S['include'][P]> | null :
      P extends 'warlordTrait'
      ? NameEffectGetPayload<S['include'][P]> | null :
      P extends 'CrusadeArmy'
      ? CrusadeArmyGetPayload<S['include'][P]> | null :
      P extends 'battleHonours'
      ? Array<BattleHonourGetPayload<S['include'][P]>> :
      P extends 'OtherTrait'
      ? Array<OtherTraitGetPayload<S['include'][P]>> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof CrusadeUnit ? CrusadeUnit[P]
: 
      P extends 'relic'
      ? NameEffectGetPayload<S['select'][P]> | null :
      P extends 'warlordTrait'
      ? NameEffectGetPayload<S['select'][P]> | null :
      P extends 'CrusadeArmy'
      ? CrusadeArmyGetPayload<S['select'][P]> | null :
      P extends 'battleHonours'
      ? Array<BattleHonourGetPayload<S['select'][P]>> :
      P extends 'OtherTrait'
      ? Array<OtherTraitGetPayload<S['select'][P]>> : never
    }
  : CrusadeUnit
: CrusadeUnit


export interface CrusadeUnitDelegate {
  /**
   * Find zero or one CrusadeUnit that matches the filter.
   * @param {FindOneCrusadeUnitArgs} args - Arguments to find a CrusadeUnit
   * @example
   * // Get one CrusadeUnit
   * const crusadeUnit = await prisma.crusadeUnit.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneCrusadeUnitArgs>(
    args: Subset<T, FindOneCrusadeUnitArgs>
  ): CheckSelect<T, Prisma__CrusadeUnitClient<CrusadeUnit | null>, Prisma__CrusadeUnitClient<CrusadeUnitGetPayload<T> | null>>
  /**
   * Find the first CrusadeUnit that matches the filter.
   * @param {FindFirstCrusadeUnitArgs} args - Arguments to find a CrusadeUnit
   * @example
   * // Get one CrusadeUnit
   * const crusadeUnit = await prisma.crusadeUnit.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findFirst<T extends FindFirstCrusadeUnitArgs>(
    args?: Subset<T, FindFirstCrusadeUnitArgs>
  ): CheckSelect<T, Prisma__CrusadeUnitClient<CrusadeUnit | null>, Prisma__CrusadeUnitClient<CrusadeUnitGetPayload<T> | null>>
  /**
   * Find zero or more CrusadeUnits that matches the filter.
   * @param {FindManyCrusadeUnitArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all CrusadeUnits
   * const crusadeUnits = await prisma.crusadeUnit.findMany()
   * 
   * // Get first 10 CrusadeUnits
   * const crusadeUnits = await prisma.crusadeUnit.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const crusadeUnitWithIdOnly = await prisma.crusadeUnit.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyCrusadeUnitArgs>(
    args?: Subset<T, FindManyCrusadeUnitArgs>
  ): CheckSelect<T, Promise<Array<CrusadeUnit>>, Promise<Array<CrusadeUnitGetPayload<T>>>>
  /**
   * Create a CrusadeUnit.
   * @param {CrusadeUnitCreateArgs} args - Arguments to create a CrusadeUnit.
   * @example
   * // Create one CrusadeUnit
   * const CrusadeUnit = await prisma.crusadeUnit.create({
   *   data: {
   *     // ... data to create a CrusadeUnit
   *   }
   * })
   * 
  **/
  create<T extends CrusadeUnitCreateArgs>(
    args: Subset<T, CrusadeUnitCreateArgs>
  ): CheckSelect<T, Prisma__CrusadeUnitClient<CrusadeUnit>, Prisma__CrusadeUnitClient<CrusadeUnitGetPayload<T>>>
  /**
   * Delete a CrusadeUnit.
   * @param {CrusadeUnitDeleteArgs} args - Arguments to delete one CrusadeUnit.
   * @example
   * // Delete one CrusadeUnit
   * const CrusadeUnit = await prisma.crusadeUnit.delete({
   *   where: {
   *     // ... filter to delete one CrusadeUnit
   *   }
   * })
   * 
  **/
  delete<T extends CrusadeUnitDeleteArgs>(
    args: Subset<T, CrusadeUnitDeleteArgs>
  ): CheckSelect<T, Prisma__CrusadeUnitClient<CrusadeUnit>, Prisma__CrusadeUnitClient<CrusadeUnitGetPayload<T>>>
  /**
   * Update one CrusadeUnit.
   * @param {CrusadeUnitUpdateArgs} args - Arguments to update one CrusadeUnit.
   * @example
   * // Update one CrusadeUnit
   * const crusadeUnit = await prisma.crusadeUnit.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends CrusadeUnitUpdateArgs>(
    args: Subset<T, CrusadeUnitUpdateArgs>
  ): CheckSelect<T, Prisma__CrusadeUnitClient<CrusadeUnit>, Prisma__CrusadeUnitClient<CrusadeUnitGetPayload<T>>>
  /**
   * Delete zero or more CrusadeUnits.
   * @param {CrusadeUnitDeleteManyArgs} args - Arguments to filter CrusadeUnits to delete.
   * @example
   * // Delete a few CrusadeUnits
   * const { count } = await prisma.crusadeUnit.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends CrusadeUnitDeleteManyArgs>(
    args: Subset<T, CrusadeUnitDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more CrusadeUnits.
   * @param {CrusadeUnitUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many CrusadeUnits
   * const crusadeUnit = await prisma.crusadeUnit.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends CrusadeUnitUpdateManyArgs>(
    args: Subset<T, CrusadeUnitUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one CrusadeUnit.
   * @param {CrusadeUnitUpsertArgs} args - Arguments to update or create a CrusadeUnit.
   * @example
   * // Update or create a CrusadeUnit
   * const crusadeUnit = await prisma.crusadeUnit.upsert({
   *   create: {
   *     // ... data to create a CrusadeUnit
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the CrusadeUnit we want to update
   *   }
   * })
  **/
  upsert<T extends CrusadeUnitUpsertArgs>(
    args: Subset<T, CrusadeUnitUpsertArgs>
  ): CheckSelect<T, Prisma__CrusadeUnitClient<CrusadeUnit>, Prisma__CrusadeUnitClient<CrusadeUnitGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManyCrusadeUnitArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregateCrusadeUnitArgs>(args: Subset<T, AggregateCrusadeUnitArgs>): Promise<GetCrusadeUnitAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for CrusadeUnit.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__CrusadeUnitClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  relic<T extends NameEffectArgs = {}>(args?: Subset<T, NameEffectArgs>): CheckSelect<T, Prisma__NameEffectClient<NameEffect | null>, Prisma__NameEffectClient<NameEffectGetPayload<T> | null>>;

  warlordTrait<T extends NameEffectArgs = {}>(args?: Subset<T, NameEffectArgs>): CheckSelect<T, Prisma__NameEffectClient<NameEffect | null>, Prisma__NameEffectClient<NameEffectGetPayload<T> | null>>;

  CrusadeArmy<T extends CrusadeArmyArgs = {}>(args?: Subset<T, CrusadeArmyArgs>): CheckSelect<T, Prisma__CrusadeArmyClient<CrusadeArmy | null>, Prisma__CrusadeArmyClient<CrusadeArmyGetPayload<T> | null>>;

  battleHonours<T extends FindManyBattleHonourArgs = {}>(args?: Subset<T, FindManyBattleHonourArgs>): CheckSelect<T, Promise<Array<BattleHonour>>, Promise<Array<BattleHonourGetPayload<T>>>>;

  OtherTrait<T extends FindManyOtherTraitArgs = {}>(args?: Subset<T, FindManyOtherTraitArgs>): CheckSelect<T, Promise<Array<OtherTrait>>, Promise<Array<OtherTraitGetPayload<T>>>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * CrusadeUnit findOne
 */
export type FindOneCrusadeUnitArgs = {
  /**
   * Select specific fields to fetch from the CrusadeUnit
  **/
  select?: CrusadeUnitSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: CrusadeUnitInclude | null
  /**
   * Filter, which CrusadeUnit to fetch.
  **/
  where: CrusadeUnitWhereUniqueInput
}


/**
 * CrusadeUnit findFirst
 */
export type FindFirstCrusadeUnitArgs = {
  /**
   * Select specific fields to fetch from the CrusadeUnit
  **/
  select?: CrusadeUnitSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: CrusadeUnitInclude | null
  /**
   * Filter, which CrusadeUnit to fetch.
  **/
  where?: CrusadeUnitWhereInput
  orderBy?: Enumerable<CrusadeUnitOrderByInput> | CrusadeUnitOrderByInput
  cursor?: CrusadeUnitWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<CrusadeUnitDistinctFieldEnum>
}


/**
 * CrusadeUnit findMany
 */
export type FindManyCrusadeUnitArgs = {
  /**
   * Select specific fields to fetch from the CrusadeUnit
  **/
  select?: CrusadeUnitSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: CrusadeUnitInclude | null
  /**
   * Filter, which CrusadeUnits to fetch.
  **/
  where?: CrusadeUnitWhereInput
  /**
   * Determine the order of the CrusadeUnits to fetch.
  **/
  orderBy?: Enumerable<CrusadeUnitOrderByInput> | CrusadeUnitOrderByInput
  /**
   * Sets the position for listing CrusadeUnits.
  **/
  cursor?: CrusadeUnitWhereUniqueInput
  /**
   * The number of CrusadeUnits to fetch. If negative number, it will take CrusadeUnits before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` CrusadeUnits.
  **/
  skip?: number
  distinct?: Enumerable<CrusadeUnitDistinctFieldEnum>
}


/**
 * CrusadeUnit create
 */
export type CrusadeUnitCreateArgs = {
  /**
   * Select specific fields to fetch from the CrusadeUnit
  **/
  select?: CrusadeUnitSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: CrusadeUnitInclude | null
  /**
   * The data needed to create a CrusadeUnit.
  **/
  data: CrusadeUnitCreateInput
}


/**
 * CrusadeUnit update
 */
export type CrusadeUnitUpdateArgs = {
  /**
   * Select specific fields to fetch from the CrusadeUnit
  **/
  select?: CrusadeUnitSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: CrusadeUnitInclude | null
  /**
   * The data needed to update a CrusadeUnit.
  **/
  data: CrusadeUnitUpdateInput
  /**
   * Choose, which CrusadeUnit to update.
  **/
  where: CrusadeUnitWhereUniqueInput
}


/**
 * CrusadeUnit updateMany
 */
export type CrusadeUnitUpdateManyArgs = {
  data: CrusadeUnitUpdateManyMutationInput
  where?: CrusadeUnitWhereInput
}


/**
 * CrusadeUnit upsert
 */
export type CrusadeUnitUpsertArgs = {
  /**
   * Select specific fields to fetch from the CrusadeUnit
  **/
  select?: CrusadeUnitSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: CrusadeUnitInclude | null
  /**
   * The filter to search for the CrusadeUnit to update in case it exists.
  **/
  where: CrusadeUnitWhereUniqueInput
  /**
   * In case the CrusadeUnit found by the `where` argument doesn't exist, create a new CrusadeUnit with this data.
  **/
  create: CrusadeUnitCreateInput
  /**
   * In case the CrusadeUnit was found with the provided `where` argument, update it with this data.
  **/
  update: CrusadeUnitUpdateInput
}


/**
 * CrusadeUnit delete
 */
export type CrusadeUnitDeleteArgs = {
  /**
   * Select specific fields to fetch from the CrusadeUnit
  **/
  select?: CrusadeUnitSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: CrusadeUnitInclude | null
  /**
   * Filter which CrusadeUnit to delete.
  **/
  where: CrusadeUnitWhereUniqueInput
}


/**
 * CrusadeUnit deleteMany
 */
export type CrusadeUnitDeleteManyArgs = {
  where?: CrusadeUnitWhereInput
}


/**
 * CrusadeUnit without action
 */
export type CrusadeUnitArgs = {
  /**
   * Select specific fields to fetch from the CrusadeUnit
  **/
  select?: CrusadeUnitSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: CrusadeUnitInclude | null
}



/**
 * Model BattleHonour
 */

export type BattleHonour = {
  id: number
  crusadePoints: number
  battleTraitId: number | null
  rank: string
  crusadeUnitId: number | null
}


export type AggregateBattleHonour = {
  count: number
  avg: BattleHonourAvgAggregateOutputType | null
  sum: BattleHonourSumAggregateOutputType | null
  min: BattleHonourMinAggregateOutputType | null
  max: BattleHonourMaxAggregateOutputType | null
}

export type BattleHonourAvgAggregateOutputType = {
  id: number
  crusadePoints: number
  battleTraitId: number | null
  crusadeUnitId: number | null
}

export type BattleHonourSumAggregateOutputType = {
  id: number
  crusadePoints: number
  battleTraitId: number | null
  crusadeUnitId: number | null
}

export type BattleHonourMinAggregateOutputType = {
  id: number
  crusadePoints: number
  battleTraitId: number | null
  crusadeUnitId: number | null
}

export type BattleHonourMaxAggregateOutputType = {
  id: number
  crusadePoints: number
  battleTraitId: number | null
  crusadeUnitId: number | null
}


export type BattleHonourAvgAggregateInputType = {
  id?: true
  crusadePoints?: true
  battleTraitId?: true
  crusadeUnitId?: true
}

export type BattleHonourSumAggregateInputType = {
  id?: true
  crusadePoints?: true
  battleTraitId?: true
  crusadeUnitId?: true
}

export type BattleHonourMinAggregateInputType = {
  id?: true
  crusadePoints?: true
  battleTraitId?: true
  crusadeUnitId?: true
}

export type BattleHonourMaxAggregateInputType = {
  id?: true
  crusadePoints?: true
  battleTraitId?: true
  crusadeUnitId?: true
}

export type AggregateBattleHonourArgs = {
  where?: BattleHonourWhereInput
  orderBy?: Enumerable<BattleHonourOrderByInput> | BattleHonourOrderByInput
  cursor?: BattleHonourWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<BattleHonourDistinctFieldEnum>
  count?: true
  avg?: BattleHonourAvgAggregateInputType
  sum?: BattleHonourSumAggregateInputType
  min?: BattleHonourMinAggregateInputType
  max?: BattleHonourMaxAggregateInputType
}

export type GetBattleHonourAggregateType<T extends AggregateBattleHonourArgs> = {
  [P in keyof T]: P extends 'count' ? number : GetBattleHonourAggregateScalarType<T[P]>
}

export type GetBattleHonourAggregateScalarType<T extends any> = {
  [P in keyof T]: P extends keyof BattleHonourAvgAggregateOutputType ? BattleHonourAvgAggregateOutputType[P] : never
}
    
    

export type BattleHonourSelect = {
  id?: boolean
  crusadePoints?: boolean
  battleTrait?: boolean | NameEffectArgs
  battleTraitId?: boolean
  rank?: boolean
  CrusadeUnit?: boolean | CrusadeUnitArgs
  crusadeUnitId?: boolean
}

export type BattleHonourInclude = {
  battleTrait?: boolean | NameEffectArgs
  CrusadeUnit?: boolean | CrusadeUnitArgs
}

export type BattleHonourGetPayload<
  S extends boolean | null | undefined | BattleHonourArgs,
  U = keyof S
> = S extends true
  ? BattleHonour
  : S extends undefined
  ? never
  : S extends BattleHonourArgs | FindManyBattleHonourArgs
  ? 'include' extends U
    ? BattleHonour  & {
      [P in TrueKeys<S['include']>]:
      P extends 'battleTrait'
      ? NameEffectGetPayload<S['include'][P]> | null :
      P extends 'CrusadeUnit'
      ? CrusadeUnitGetPayload<S['include'][P]> | null : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof BattleHonour ? BattleHonour[P]
: 
      P extends 'battleTrait'
      ? NameEffectGetPayload<S['select'][P]> | null :
      P extends 'CrusadeUnit'
      ? CrusadeUnitGetPayload<S['select'][P]> | null : never
    }
  : BattleHonour
: BattleHonour


export interface BattleHonourDelegate {
  /**
   * Find zero or one BattleHonour that matches the filter.
   * @param {FindOneBattleHonourArgs} args - Arguments to find a BattleHonour
   * @example
   * // Get one BattleHonour
   * const battleHonour = await prisma.battleHonour.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneBattleHonourArgs>(
    args: Subset<T, FindOneBattleHonourArgs>
  ): CheckSelect<T, Prisma__BattleHonourClient<BattleHonour | null>, Prisma__BattleHonourClient<BattleHonourGetPayload<T> | null>>
  /**
   * Find the first BattleHonour that matches the filter.
   * @param {FindFirstBattleHonourArgs} args - Arguments to find a BattleHonour
   * @example
   * // Get one BattleHonour
   * const battleHonour = await prisma.battleHonour.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findFirst<T extends FindFirstBattleHonourArgs>(
    args?: Subset<T, FindFirstBattleHonourArgs>
  ): CheckSelect<T, Prisma__BattleHonourClient<BattleHonour | null>, Prisma__BattleHonourClient<BattleHonourGetPayload<T> | null>>
  /**
   * Find zero or more BattleHonours that matches the filter.
   * @param {FindManyBattleHonourArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all BattleHonours
   * const battleHonours = await prisma.battleHonour.findMany()
   * 
   * // Get first 10 BattleHonours
   * const battleHonours = await prisma.battleHonour.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const battleHonourWithIdOnly = await prisma.battleHonour.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyBattleHonourArgs>(
    args?: Subset<T, FindManyBattleHonourArgs>
  ): CheckSelect<T, Promise<Array<BattleHonour>>, Promise<Array<BattleHonourGetPayload<T>>>>
  /**
   * Create a BattleHonour.
   * @param {BattleHonourCreateArgs} args - Arguments to create a BattleHonour.
   * @example
   * // Create one BattleHonour
   * const BattleHonour = await prisma.battleHonour.create({
   *   data: {
   *     // ... data to create a BattleHonour
   *   }
   * })
   * 
  **/
  create<T extends BattleHonourCreateArgs>(
    args: Subset<T, BattleHonourCreateArgs>
  ): CheckSelect<T, Prisma__BattleHonourClient<BattleHonour>, Prisma__BattleHonourClient<BattleHonourGetPayload<T>>>
  /**
   * Delete a BattleHonour.
   * @param {BattleHonourDeleteArgs} args - Arguments to delete one BattleHonour.
   * @example
   * // Delete one BattleHonour
   * const BattleHonour = await prisma.battleHonour.delete({
   *   where: {
   *     // ... filter to delete one BattleHonour
   *   }
   * })
   * 
  **/
  delete<T extends BattleHonourDeleteArgs>(
    args: Subset<T, BattleHonourDeleteArgs>
  ): CheckSelect<T, Prisma__BattleHonourClient<BattleHonour>, Prisma__BattleHonourClient<BattleHonourGetPayload<T>>>
  /**
   * Update one BattleHonour.
   * @param {BattleHonourUpdateArgs} args - Arguments to update one BattleHonour.
   * @example
   * // Update one BattleHonour
   * const battleHonour = await prisma.battleHonour.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends BattleHonourUpdateArgs>(
    args: Subset<T, BattleHonourUpdateArgs>
  ): CheckSelect<T, Prisma__BattleHonourClient<BattleHonour>, Prisma__BattleHonourClient<BattleHonourGetPayload<T>>>
  /**
   * Delete zero or more BattleHonours.
   * @param {BattleHonourDeleteManyArgs} args - Arguments to filter BattleHonours to delete.
   * @example
   * // Delete a few BattleHonours
   * const { count } = await prisma.battleHonour.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends BattleHonourDeleteManyArgs>(
    args: Subset<T, BattleHonourDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more BattleHonours.
   * @param {BattleHonourUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many BattleHonours
   * const battleHonour = await prisma.battleHonour.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends BattleHonourUpdateManyArgs>(
    args: Subset<T, BattleHonourUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one BattleHonour.
   * @param {BattleHonourUpsertArgs} args - Arguments to update or create a BattleHonour.
   * @example
   * // Update or create a BattleHonour
   * const battleHonour = await prisma.battleHonour.upsert({
   *   create: {
   *     // ... data to create a BattleHonour
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the BattleHonour we want to update
   *   }
   * })
  **/
  upsert<T extends BattleHonourUpsertArgs>(
    args: Subset<T, BattleHonourUpsertArgs>
  ): CheckSelect<T, Prisma__BattleHonourClient<BattleHonour>, Prisma__BattleHonourClient<BattleHonourGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManyBattleHonourArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregateBattleHonourArgs>(args: Subset<T, AggregateBattleHonourArgs>): Promise<GetBattleHonourAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for BattleHonour.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__BattleHonourClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  battleTrait<T extends NameEffectArgs = {}>(args?: Subset<T, NameEffectArgs>): CheckSelect<T, Prisma__NameEffectClient<NameEffect | null>, Prisma__NameEffectClient<NameEffectGetPayload<T> | null>>;

  CrusadeUnit<T extends CrusadeUnitArgs = {}>(args?: Subset<T, CrusadeUnitArgs>): CheckSelect<T, Prisma__CrusadeUnitClient<CrusadeUnit | null>, Prisma__CrusadeUnitClient<CrusadeUnitGetPayload<T> | null>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * BattleHonour findOne
 */
export type FindOneBattleHonourArgs = {
  /**
   * Select specific fields to fetch from the BattleHonour
  **/
  select?: BattleHonourSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: BattleHonourInclude | null
  /**
   * Filter, which BattleHonour to fetch.
  **/
  where: BattleHonourWhereUniqueInput
}


/**
 * BattleHonour findFirst
 */
export type FindFirstBattleHonourArgs = {
  /**
   * Select specific fields to fetch from the BattleHonour
  **/
  select?: BattleHonourSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: BattleHonourInclude | null
  /**
   * Filter, which BattleHonour to fetch.
  **/
  where?: BattleHonourWhereInput
  orderBy?: Enumerable<BattleHonourOrderByInput> | BattleHonourOrderByInput
  cursor?: BattleHonourWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<BattleHonourDistinctFieldEnum>
}


/**
 * BattleHonour findMany
 */
export type FindManyBattleHonourArgs = {
  /**
   * Select specific fields to fetch from the BattleHonour
  **/
  select?: BattleHonourSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: BattleHonourInclude | null
  /**
   * Filter, which BattleHonours to fetch.
  **/
  where?: BattleHonourWhereInput
  /**
   * Determine the order of the BattleHonours to fetch.
  **/
  orderBy?: Enumerable<BattleHonourOrderByInput> | BattleHonourOrderByInput
  /**
   * Sets the position for listing BattleHonours.
  **/
  cursor?: BattleHonourWhereUniqueInput
  /**
   * The number of BattleHonours to fetch. If negative number, it will take BattleHonours before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` BattleHonours.
  **/
  skip?: number
  distinct?: Enumerable<BattleHonourDistinctFieldEnum>
}


/**
 * BattleHonour create
 */
export type BattleHonourCreateArgs = {
  /**
   * Select specific fields to fetch from the BattleHonour
  **/
  select?: BattleHonourSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: BattleHonourInclude | null
  /**
   * The data needed to create a BattleHonour.
  **/
  data: BattleHonourCreateInput
}


/**
 * BattleHonour update
 */
export type BattleHonourUpdateArgs = {
  /**
   * Select specific fields to fetch from the BattleHonour
  **/
  select?: BattleHonourSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: BattleHonourInclude | null
  /**
   * The data needed to update a BattleHonour.
  **/
  data: BattleHonourUpdateInput
  /**
   * Choose, which BattleHonour to update.
  **/
  where: BattleHonourWhereUniqueInput
}


/**
 * BattleHonour updateMany
 */
export type BattleHonourUpdateManyArgs = {
  data: BattleHonourUpdateManyMutationInput
  where?: BattleHonourWhereInput
}


/**
 * BattleHonour upsert
 */
export type BattleHonourUpsertArgs = {
  /**
   * Select specific fields to fetch from the BattleHonour
  **/
  select?: BattleHonourSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: BattleHonourInclude | null
  /**
   * The filter to search for the BattleHonour to update in case it exists.
  **/
  where: BattleHonourWhereUniqueInput
  /**
   * In case the BattleHonour found by the `where` argument doesn't exist, create a new BattleHonour with this data.
  **/
  create: BattleHonourCreateInput
  /**
   * In case the BattleHonour was found with the provided `where` argument, update it with this data.
  **/
  update: BattleHonourUpdateInput
}


/**
 * BattleHonour delete
 */
export type BattleHonourDeleteArgs = {
  /**
   * Select specific fields to fetch from the BattleHonour
  **/
  select?: BattleHonourSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: BattleHonourInclude | null
  /**
   * Filter which BattleHonour to delete.
  **/
  where: BattleHonourWhereUniqueInput
}


/**
 * BattleHonour deleteMany
 */
export type BattleHonourDeleteManyArgs = {
  where?: BattleHonourWhereInput
}


/**
 * BattleHonour without action
 */
export type BattleHonourArgs = {
  /**
   * Select specific fields to fetch from the BattleHonour
  **/
  select?: BattleHonourSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: BattleHonourInclude | null
}



/**
 * Model OtherTrait
 */

export type OtherTrait = {
  id: number
  name: string
}


export type AggregateOtherTrait = {
  count: number
  avg: OtherTraitAvgAggregateOutputType | null
  sum: OtherTraitSumAggregateOutputType | null
  min: OtherTraitMinAggregateOutputType | null
  max: OtherTraitMaxAggregateOutputType | null
}

export type OtherTraitAvgAggregateOutputType = {
  id: number
}

export type OtherTraitSumAggregateOutputType = {
  id: number
}

export type OtherTraitMinAggregateOutputType = {
  id: number
}

export type OtherTraitMaxAggregateOutputType = {
  id: number
}


export type OtherTraitAvgAggregateInputType = {
  id?: true
}

export type OtherTraitSumAggregateInputType = {
  id?: true
}

export type OtherTraitMinAggregateInputType = {
  id?: true
}

export type OtherTraitMaxAggregateInputType = {
  id?: true
}

export type AggregateOtherTraitArgs = {
  where?: OtherTraitWhereInput
  orderBy?: Enumerable<OtherTraitOrderByInput> | OtherTraitOrderByInput
  cursor?: OtherTraitWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<OtherTraitDistinctFieldEnum>
  count?: true
  avg?: OtherTraitAvgAggregateInputType
  sum?: OtherTraitSumAggregateInputType
  min?: OtherTraitMinAggregateInputType
  max?: OtherTraitMaxAggregateInputType
}

export type GetOtherTraitAggregateType<T extends AggregateOtherTraitArgs> = {
  [P in keyof T]: P extends 'count' ? number : GetOtherTraitAggregateScalarType<T[P]>
}

export type GetOtherTraitAggregateScalarType<T extends any> = {
  [P in keyof T]: P extends keyof OtherTraitAvgAggregateOutputType ? OtherTraitAvgAggregateOutputType[P] : never
}
    
    

export type OtherTraitSelect = {
  id?: boolean
  name?: boolean
  nameEffects?: boolean | FindManyNameEffectArgs
  CrusadeUnit?: boolean | FindManyCrusadeUnitArgs
}

export type OtherTraitInclude = {
  nameEffects?: boolean | FindManyNameEffectArgs
  CrusadeUnit?: boolean | FindManyCrusadeUnitArgs
}

export type OtherTraitGetPayload<
  S extends boolean | null | undefined | OtherTraitArgs,
  U = keyof S
> = S extends true
  ? OtherTrait
  : S extends undefined
  ? never
  : S extends OtherTraitArgs | FindManyOtherTraitArgs
  ? 'include' extends U
    ? OtherTrait  & {
      [P in TrueKeys<S['include']>]:
      P extends 'nameEffects'
      ? Array<NameEffectGetPayload<S['include'][P]>> :
      P extends 'CrusadeUnit'
      ? Array<CrusadeUnitGetPayload<S['include'][P]>> : never
    }
  : 'select' extends U
    ? {
      [P in TrueKeys<S['select']>]:P extends keyof OtherTrait ? OtherTrait[P]
: 
      P extends 'nameEffects'
      ? Array<NameEffectGetPayload<S['select'][P]>> :
      P extends 'CrusadeUnit'
      ? Array<CrusadeUnitGetPayload<S['select'][P]>> : never
    }
  : OtherTrait
: OtherTrait


export interface OtherTraitDelegate {
  /**
   * Find zero or one OtherTrait that matches the filter.
   * @param {FindOneOtherTraitArgs} args - Arguments to find a OtherTrait
   * @example
   * // Get one OtherTrait
   * const otherTrait = await prisma.otherTrait.findOne({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findOne<T extends FindOneOtherTraitArgs>(
    args: Subset<T, FindOneOtherTraitArgs>
  ): CheckSelect<T, Prisma__OtherTraitClient<OtherTrait | null>, Prisma__OtherTraitClient<OtherTraitGetPayload<T> | null>>
  /**
   * Find the first OtherTrait that matches the filter.
   * @param {FindFirstOtherTraitArgs} args - Arguments to find a OtherTrait
   * @example
   * // Get one OtherTrait
   * const otherTrait = await prisma.otherTrait.findFirst({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
  **/
  findFirst<T extends FindFirstOtherTraitArgs>(
    args?: Subset<T, FindFirstOtherTraitArgs>
  ): CheckSelect<T, Prisma__OtherTraitClient<OtherTrait | null>, Prisma__OtherTraitClient<OtherTraitGetPayload<T> | null>>
  /**
   * Find zero or more OtherTraits that matches the filter.
   * @param {FindManyOtherTraitArgs=} args - Arguments to filter and select certain fields only.
   * @example
   * // Get all OtherTraits
   * const otherTraits = await prisma.otherTrait.findMany()
   * 
   * // Get first 10 OtherTraits
   * const otherTraits = await prisma.otherTrait.findMany({ take: 10 })
   * 
   * // Only select the `id`
   * const otherTraitWithIdOnly = await prisma.otherTrait.findMany({ select: { id: true } })
   * 
  **/
  findMany<T extends FindManyOtherTraitArgs>(
    args?: Subset<T, FindManyOtherTraitArgs>
  ): CheckSelect<T, Promise<Array<OtherTrait>>, Promise<Array<OtherTraitGetPayload<T>>>>
  /**
   * Create a OtherTrait.
   * @param {OtherTraitCreateArgs} args - Arguments to create a OtherTrait.
   * @example
   * // Create one OtherTrait
   * const OtherTrait = await prisma.otherTrait.create({
   *   data: {
   *     // ... data to create a OtherTrait
   *   }
   * })
   * 
  **/
  create<T extends OtherTraitCreateArgs>(
    args: Subset<T, OtherTraitCreateArgs>
  ): CheckSelect<T, Prisma__OtherTraitClient<OtherTrait>, Prisma__OtherTraitClient<OtherTraitGetPayload<T>>>
  /**
   * Delete a OtherTrait.
   * @param {OtherTraitDeleteArgs} args - Arguments to delete one OtherTrait.
   * @example
   * // Delete one OtherTrait
   * const OtherTrait = await prisma.otherTrait.delete({
   *   where: {
   *     // ... filter to delete one OtherTrait
   *   }
   * })
   * 
  **/
  delete<T extends OtherTraitDeleteArgs>(
    args: Subset<T, OtherTraitDeleteArgs>
  ): CheckSelect<T, Prisma__OtherTraitClient<OtherTrait>, Prisma__OtherTraitClient<OtherTraitGetPayload<T>>>
  /**
   * Update one OtherTrait.
   * @param {OtherTraitUpdateArgs} args - Arguments to update one OtherTrait.
   * @example
   * // Update one OtherTrait
   * const otherTrait = await prisma.otherTrait.update({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  update<T extends OtherTraitUpdateArgs>(
    args: Subset<T, OtherTraitUpdateArgs>
  ): CheckSelect<T, Prisma__OtherTraitClient<OtherTrait>, Prisma__OtherTraitClient<OtherTraitGetPayload<T>>>
  /**
   * Delete zero or more OtherTraits.
   * @param {OtherTraitDeleteManyArgs} args - Arguments to filter OtherTraits to delete.
   * @example
   * // Delete a few OtherTraits
   * const { count } = await prisma.otherTrait.deleteMany({
   *   where: {
   *     // ... provide filter here
   *   }
   * })
   * 
  **/
  deleteMany<T extends OtherTraitDeleteManyArgs>(
    args: Subset<T, OtherTraitDeleteManyArgs>
  ): Promise<BatchPayload>
  /**
   * Update zero or more OtherTraits.
   * @param {OtherTraitUpdateManyArgs} args - Arguments to update one or more rows.
   * @example
   * // Update many OtherTraits
   * const otherTrait = await prisma.otherTrait.updateMany({
   *   where: {
   *     // ... provide filter here
   *   },
   *   data: {
   *     // ... provide data here
   *   }
   * })
   * 
  **/
  updateMany<T extends OtherTraitUpdateManyArgs>(
    args: Subset<T, OtherTraitUpdateManyArgs>
  ): Promise<BatchPayload>
  /**
   * Create or update one OtherTrait.
   * @param {OtherTraitUpsertArgs} args - Arguments to update or create a OtherTrait.
   * @example
   * // Update or create a OtherTrait
   * const otherTrait = await prisma.otherTrait.upsert({
   *   create: {
   *     // ... data to create a OtherTrait
   *   },
   *   update: {
   *     // ... in case it already exists, update
   *   },
   *   where: {
   *     // ... the filter for the OtherTrait we want to update
   *   }
   * })
  **/
  upsert<T extends OtherTraitUpsertArgs>(
    args: Subset<T, OtherTraitUpsertArgs>
  ): CheckSelect<T, Prisma__OtherTraitClient<OtherTrait>, Prisma__OtherTraitClient<OtherTraitGetPayload<T>>>
  /**
   * Count
   */
  count(args?: Omit<FindManyOtherTraitArgs, 'select' | 'include'>): Promise<number>

  /**
   * Aggregate
   */
  aggregate<T extends AggregateOtherTraitArgs>(args: Subset<T, AggregateOtherTraitArgs>): Promise<GetOtherTraitAggregateType<T>>
}

/**
 * The delegate class that acts as a "Promise-like" for OtherTrait.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in 
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export declare class Prisma__OtherTraitClient<T> implements Promise<T> {
  private readonly _dmmf;
  private readonly _fetcher;
  private readonly _queryType;
  private readonly _rootField;
  private readonly _clientMethod;
  private readonly _args;
  private readonly _dataPath;
  private readonly _errorFormat;
  private readonly _measurePerformance?;
  private _isList;
  private _callsite;
  private _requestPromise?;
  constructor(_dmmf: DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
  readonly [Symbol.toStringTag]: 'PrismaClientPromise';

  nameEffects<T extends FindManyNameEffectArgs = {}>(args?: Subset<T, FindManyNameEffectArgs>): CheckSelect<T, Promise<Array<NameEffect>>, Promise<Array<NameEffectGetPayload<T>>>>;

  CrusadeUnit<T extends FindManyCrusadeUnitArgs = {}>(args?: Subset<T, FindManyCrusadeUnitArgs>): CheckSelect<T, Promise<Array<CrusadeUnit>>, Promise<Array<CrusadeUnitGetPayload<T>>>>;

  private get _document();
  /**
   * Attaches callbacks for the resolution and/or rejection of the Promise.
   * @param onfulfilled The callback to execute when the Promise is resolved.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of which ever callback is executed.
   */
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | Promise<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | Promise<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
  /**
   * Attaches a callback for only the rejection of the Promise.
   * @param onrejected The callback to execute when the Promise is rejected.
   * @returns A Promise for the completion of the callback.
   */
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | Promise<TResult>) | undefined | null): Promise<T | TResult>;
  /**
   * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
   * resolved value cannot be modified from the callback.
   * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
   * @returns A Promise for the completion of the callback.
   */
  finally(onfinally?: (() => void) | undefined | null): Promise<T>;
}

// Custom InputTypes

/**
 * OtherTrait findOne
 */
export type FindOneOtherTraitArgs = {
  /**
   * Select specific fields to fetch from the OtherTrait
  **/
  select?: OtherTraitSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: OtherTraitInclude | null
  /**
   * Filter, which OtherTrait to fetch.
  **/
  where: OtherTraitWhereUniqueInput
}


/**
 * OtherTrait findFirst
 */
export type FindFirstOtherTraitArgs = {
  /**
   * Select specific fields to fetch from the OtherTrait
  **/
  select?: OtherTraitSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: OtherTraitInclude | null
  /**
   * Filter, which OtherTrait to fetch.
  **/
  where?: OtherTraitWhereInput
  orderBy?: Enumerable<OtherTraitOrderByInput> | OtherTraitOrderByInput
  cursor?: OtherTraitWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Enumerable<OtherTraitDistinctFieldEnum>
}


/**
 * OtherTrait findMany
 */
export type FindManyOtherTraitArgs = {
  /**
   * Select specific fields to fetch from the OtherTrait
  **/
  select?: OtherTraitSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: OtherTraitInclude | null
  /**
   * Filter, which OtherTraits to fetch.
  **/
  where?: OtherTraitWhereInput
  /**
   * Determine the order of the OtherTraits to fetch.
  **/
  orderBy?: Enumerable<OtherTraitOrderByInput> | OtherTraitOrderByInput
  /**
   * Sets the position for listing OtherTraits.
  **/
  cursor?: OtherTraitWhereUniqueInput
  /**
   * The number of OtherTraits to fetch. If negative number, it will take OtherTraits before the `cursor`.
  **/
  take?: number
  /**
   * Skip the first `n` OtherTraits.
  **/
  skip?: number
  distinct?: Enumerable<OtherTraitDistinctFieldEnum>
}


/**
 * OtherTrait create
 */
export type OtherTraitCreateArgs = {
  /**
   * Select specific fields to fetch from the OtherTrait
  **/
  select?: OtherTraitSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: OtherTraitInclude | null
  /**
   * The data needed to create a OtherTrait.
  **/
  data: OtherTraitCreateInput
}


/**
 * OtherTrait update
 */
export type OtherTraitUpdateArgs = {
  /**
   * Select specific fields to fetch from the OtherTrait
  **/
  select?: OtherTraitSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: OtherTraitInclude | null
  /**
   * The data needed to update a OtherTrait.
  **/
  data: OtherTraitUpdateInput
  /**
   * Choose, which OtherTrait to update.
  **/
  where: OtherTraitWhereUniqueInput
}


/**
 * OtherTrait updateMany
 */
export type OtherTraitUpdateManyArgs = {
  data: OtherTraitUpdateManyMutationInput
  where?: OtherTraitWhereInput
}


/**
 * OtherTrait upsert
 */
export type OtherTraitUpsertArgs = {
  /**
   * Select specific fields to fetch from the OtherTrait
  **/
  select?: OtherTraitSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: OtherTraitInclude | null
  /**
   * The filter to search for the OtherTrait to update in case it exists.
  **/
  where: OtherTraitWhereUniqueInput
  /**
   * In case the OtherTrait found by the `where` argument doesn't exist, create a new OtherTrait with this data.
  **/
  create: OtherTraitCreateInput
  /**
   * In case the OtherTrait was found with the provided `where` argument, update it with this data.
  **/
  update: OtherTraitUpdateInput
}


/**
 * OtherTrait delete
 */
export type OtherTraitDeleteArgs = {
  /**
   * Select specific fields to fetch from the OtherTrait
  **/
  select?: OtherTraitSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: OtherTraitInclude | null
  /**
   * Filter which OtherTrait to delete.
  **/
  where: OtherTraitWhereUniqueInput
}


/**
 * OtherTrait deleteMany
 */
export type OtherTraitDeleteManyArgs = {
  where?: OtherTraitWhereInput
}


/**
 * OtherTrait without action
 */
export type OtherTraitArgs = {
  /**
   * Select specific fields to fetch from the OtherTrait
  **/
  select?: OtherTraitSelect | null
  /**
   * Choose, which related nodes to fetch as well.
  **/
  include?: OtherTraitInclude | null
}



/**
 * Deep Input Types
 */


export type CrusadeArmyWhereInput = {
  AND?: CrusadeArmyWhereInput | Enumerable<CrusadeArmyWhereInput>
  OR?: CrusadeArmyWhereInput | Enumerable<CrusadeArmyWhereInput>
  NOT?: CrusadeArmyWhereInput | Enumerable<CrusadeArmyWhereInput>
  id?: IntFilter | number
  requisitionPoints?: IntFilter | number
  traitColor?: StringFilter | string
  maximumPowerLevel?: IntFilter | number
  createdAt?: DateTimeFilter | Date | string
  name?: StringFilter | string
  detachmentTrait?: NameEffectRelationFilter | NameEffectWhereInput | null
  detachmentTraitId?: IntNullableFilter | number | null
  units?: CrusadeUnitListRelationFilter
}

export type CrusadeArmyOrderByInput = {
  id?: SortOrder
  requisitionPoints?: SortOrder
  traitColor?: SortOrder
  maximumPowerLevel?: SortOrder
  createdAt?: SortOrder
  name?: SortOrder
  detachmentTraitId?: SortOrder
}

export type CrusadeArmyWhereUniqueInput = {
  id?: number
}

export type NameEffectWhereInput = {
  AND?: NameEffectWhereInput | Enumerable<NameEffectWhereInput>
  OR?: NameEffectWhereInput | Enumerable<NameEffectWhereInput>
  NOT?: NameEffectWhereInput | Enumerable<NameEffectWhereInput>
  id?: IntFilter | number
  name?: StringFilter | string
  effect?: StringFilter | string
  CrusadeArmy?: CrusadeArmyListRelationFilter
  Relic?: CrusadeUnitListRelationFilter
  WarlordTrait?: CrusadeUnitListRelationFilter
  BattleHonour?: BattleHonourListRelationFilter
  OtherTrait?: OtherTraitRelationFilter | OtherTraitWhereInput | null
  otherTraitId?: IntNullableFilter | number | null
}

export type NameEffectOrderByInput = {
  id?: SortOrder
  name?: SortOrder
  effect?: SortOrder
  otherTraitId?: SortOrder
}

export type NameEffectWhereUniqueInput = {
  id?: number
}

export type CrusadeUnitWhereInput = {
  AND?: CrusadeUnitWhereInput | Enumerable<CrusadeUnitWhereInput>
  OR?: CrusadeUnitWhereInput | Enumerable<CrusadeUnitWhereInput>
  NOT?: CrusadeUnitWhereInput | Enumerable<CrusadeUnitWhereInput>
  id?: IntFilter | number
  name?: StringFilter | string
  alternateName?: StringNullableFilter | string | null
  agendaXp?: IntFilter | number
  battleParticipation?: IntFilter | number
  experienceLoss?: IntFilter | number
  kills?: IntFilter | number
  markedForGreatness?: IntFilter | number
  notes?: StringNullableFilter | string | null
  powerLevel?: IntFilter | number
  relic?: NameEffectRelationFilter | NameEffectWhereInput | null
  relicId?: IntNullableFilter | number | null
  sequenceNumber?: IntFilter | number
  warlordTrait?: NameEffectRelationFilter | NameEffectWhereInput | null
  warlordTraitId?: IntNullableFilter | number | null
  CrusadeArmy?: CrusadeArmyRelationFilter | CrusadeArmyWhereInput | null
  crusadeArmyId?: IntNullableFilter | number | null
  battleHonours?: BattleHonourListRelationFilter
  OtherTrait?: OtherTraitListRelationFilter
}

export type CrusadeUnitOrderByInput = {
  id?: SortOrder
  name?: SortOrder
  alternateName?: SortOrder
  agendaXp?: SortOrder
  battleParticipation?: SortOrder
  experienceLoss?: SortOrder
  kills?: SortOrder
  markedForGreatness?: SortOrder
  notes?: SortOrder
  powerLevel?: SortOrder
  relicId?: SortOrder
  sequenceNumber?: SortOrder
  warlordTraitId?: SortOrder
  crusadeArmyId?: SortOrder
}

export type CrusadeUnitWhereUniqueInput = {
  id?: number
}

export type BattleHonourWhereInput = {
  AND?: BattleHonourWhereInput | Enumerable<BattleHonourWhereInput>
  OR?: BattleHonourWhereInput | Enumerable<BattleHonourWhereInput>
  NOT?: BattleHonourWhereInput | Enumerable<BattleHonourWhereInput>
  id?: IntFilter | number
  crusadePoints?: IntFilter | number
  battleTrait?: NameEffectRelationFilter | NameEffectWhereInput | null
  battleTraitId?: IntNullableFilter | number | null
  rank?: StringFilter | string
  CrusadeUnit?: CrusadeUnitRelationFilter | CrusadeUnitWhereInput | null
  crusadeUnitId?: IntNullableFilter | number | null
}

export type BattleHonourOrderByInput = {
  id?: SortOrder
  crusadePoints?: SortOrder
  battleTraitId?: SortOrder
  rank?: SortOrder
  crusadeUnitId?: SortOrder
}

export type BattleHonourWhereUniqueInput = {
  id?: number
}

export type OtherTraitWhereInput = {
  AND?: OtherTraitWhereInput | Enumerable<OtherTraitWhereInput>
  OR?: OtherTraitWhereInput | Enumerable<OtherTraitWhereInput>
  NOT?: OtherTraitWhereInput | Enumerable<OtherTraitWhereInput>
  id?: IntFilter | number
  name?: StringFilter | string
  nameEffects?: NameEffectListRelationFilter
  CrusadeUnit?: CrusadeUnitListRelationFilter
}

export type OtherTraitOrderByInput = {
  id?: SortOrder
  name?: SortOrder
}

export type OtherTraitWhereUniqueInput = {
  id?: number
}

export type CrusadeArmyCreateInput = {
  requisitionPoints: number
  traitColor: string
  maximumPowerLevel: number
  createdAt?: Date | string
  name?: string
  detachmentTrait?: NameEffectCreateOneWithoutCrusadeArmyInput
  units?: CrusadeUnitCreateManyWithoutCrusadeArmyInput
}

export type CrusadeArmyUpdateInput = {
  requisitionPoints?: number | IntFieldUpdateOperationsInput
  traitColor?: string | StringFieldUpdateOperationsInput
  maximumPowerLevel?: number | IntFieldUpdateOperationsInput
  createdAt?: Date | string | DateTimeFieldUpdateOperationsInput
  name?: string | StringFieldUpdateOperationsInput
  detachmentTrait?: NameEffectUpdateOneWithoutCrusadeArmyInput
  units?: CrusadeUnitUpdateManyWithoutCrusadeArmyInput
}

export type CrusadeArmyUpdateManyMutationInput = {
  requisitionPoints?: number | IntFieldUpdateOperationsInput
  traitColor?: string | StringFieldUpdateOperationsInput
  maximumPowerLevel?: number | IntFieldUpdateOperationsInput
  createdAt?: Date | string | DateTimeFieldUpdateOperationsInput
  name?: string | StringFieldUpdateOperationsInput
}

export type NameEffectCreateInput = {
  name: string
  effect: string
  CrusadeArmy?: CrusadeArmyCreateManyWithoutDetachmentTraitInput
  Relic?: CrusadeUnitCreateManyWithoutRelicInput
  WarlordTrait?: CrusadeUnitCreateManyWithoutWarlordTraitInput
  BattleHonour?: BattleHonourCreateManyWithoutBattleTraitInput
  OtherTrait?: OtherTraitCreateOneWithoutNameEffectsInput
}

export type NameEffectUpdateInput = {
  name?: string | StringFieldUpdateOperationsInput
  effect?: string | StringFieldUpdateOperationsInput
  CrusadeArmy?: CrusadeArmyUpdateManyWithoutDetachmentTraitInput
  Relic?: CrusadeUnitUpdateManyWithoutRelicInput
  WarlordTrait?: CrusadeUnitUpdateManyWithoutWarlordTraitInput
  BattleHonour?: BattleHonourUpdateManyWithoutBattleTraitInput
  OtherTrait?: OtherTraitUpdateOneWithoutNameEffectsInput
}

export type NameEffectUpdateManyMutationInput = {
  name?: string | StringFieldUpdateOperationsInput
  effect?: string | StringFieldUpdateOperationsInput
}

export type CrusadeUnitCreateInput = {
  name: string
  alternateName?: string | null
  agendaXp: number
  battleParticipation: number
  experienceLoss: number
  kills: number
  markedForGreatness: number
  notes?: string | null
  powerLevel: number
  sequenceNumber: number
  relic?: NameEffectCreateOneWithoutRelicInput
  warlordTrait?: NameEffectCreateOneWithoutWarlordTraitInput
  CrusadeArmy?: CrusadeArmyCreateOneWithoutUnitsInput
  battleHonours?: BattleHonourCreateManyWithoutCrusadeUnitInput
  OtherTrait?: OtherTraitCreateManyWithoutCrusadeUnitInput
}

export type CrusadeUnitUpdateInput = {
  name?: string | StringFieldUpdateOperationsInput
  alternateName?: string | NullableStringFieldUpdateOperationsInput | null
  agendaXp?: number | IntFieldUpdateOperationsInput
  battleParticipation?: number | IntFieldUpdateOperationsInput
  experienceLoss?: number | IntFieldUpdateOperationsInput
  kills?: number | IntFieldUpdateOperationsInput
  markedForGreatness?: number | IntFieldUpdateOperationsInput
  notes?: string | NullableStringFieldUpdateOperationsInput | null
  powerLevel?: number | IntFieldUpdateOperationsInput
  sequenceNumber?: number | IntFieldUpdateOperationsInput
  relic?: NameEffectUpdateOneWithoutRelicInput
  warlordTrait?: NameEffectUpdateOneWithoutWarlordTraitInput
  CrusadeArmy?: CrusadeArmyUpdateOneWithoutUnitsInput
  battleHonours?: BattleHonourUpdateManyWithoutCrusadeUnitInput
  OtherTrait?: OtherTraitUpdateManyWithoutCrusadeUnitInput
}

export type CrusadeUnitUpdateManyMutationInput = {
  name?: string | StringFieldUpdateOperationsInput
  alternateName?: string | NullableStringFieldUpdateOperationsInput | null
  agendaXp?: number | IntFieldUpdateOperationsInput
  battleParticipation?: number | IntFieldUpdateOperationsInput
  experienceLoss?: number | IntFieldUpdateOperationsInput
  kills?: number | IntFieldUpdateOperationsInput
  markedForGreatness?: number | IntFieldUpdateOperationsInput
  notes?: string | NullableStringFieldUpdateOperationsInput | null
  powerLevel?: number | IntFieldUpdateOperationsInput
  sequenceNumber?: number | IntFieldUpdateOperationsInput
}

export type BattleHonourCreateInput = {
  crusadePoints: number
  rank: string
  battleTrait?: NameEffectCreateOneWithoutBattleHonourInput
  CrusadeUnit?: CrusadeUnitCreateOneWithoutBattleHonoursInput
}

export type BattleHonourUpdateInput = {
  crusadePoints?: number | IntFieldUpdateOperationsInput
  rank?: string | StringFieldUpdateOperationsInput
  battleTrait?: NameEffectUpdateOneWithoutBattleHonourInput
  CrusadeUnit?: CrusadeUnitUpdateOneWithoutBattleHonoursInput
}

export type BattleHonourUpdateManyMutationInput = {
  crusadePoints?: number | IntFieldUpdateOperationsInput
  rank?: string | StringFieldUpdateOperationsInput
}

export type OtherTraitCreateInput = {
  name: string
  nameEffects?: NameEffectCreateManyWithoutOtherTraitInput
  CrusadeUnit?: CrusadeUnitCreateManyWithoutOtherTraitInput
}

export type OtherTraitUpdateInput = {
  name?: string | StringFieldUpdateOperationsInput
  nameEffects?: NameEffectUpdateManyWithoutOtherTraitInput
  CrusadeUnit?: CrusadeUnitUpdateManyWithoutOtherTraitInput
}

export type OtherTraitUpdateManyMutationInput = {
  name?: string | StringFieldUpdateOperationsInput
}

export type IntFilter = {
  equals?: number
  in?: Enumerable<number>
  notIn?: Enumerable<number>
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: number | NestedIntFilter
}

export type StringFilter = {
  equals?: string
  in?: Enumerable<string>
  notIn?: Enumerable<string>
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: string | NestedStringFilter
}

export type DateTimeFilter = {
  equals?: Date | string
  in?: Enumerable<Date> | Enumerable<string>
  notIn?: Enumerable<Date> | Enumerable<string>
  lt?: Date | string
  lte?: Date | string
  gt?: Date | string
  gte?: Date | string
  not?: Date | string | NestedDateTimeFilter
}

export type NameEffectRelationFilter = {
  is?: NameEffectWhereInput | null
  isNot?: NameEffectWhereInput | null
}

export type IntNullableFilter = {
  equals?: number | null
  in?: Enumerable<number> | null
  notIn?: Enumerable<number> | null
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: number | NestedIntNullableFilter | null
}

export type CrusadeUnitListRelationFilter = {
  every?: CrusadeUnitWhereInput
  some?: CrusadeUnitWhereInput
  none?: CrusadeUnitWhereInput
}

export type CrusadeArmyListRelationFilter = {
  every?: CrusadeArmyWhereInput
  some?: CrusadeArmyWhereInput
  none?: CrusadeArmyWhereInput
}

export type BattleHonourListRelationFilter = {
  every?: BattleHonourWhereInput
  some?: BattleHonourWhereInput
  none?: BattleHonourWhereInput
}

export type OtherTraitRelationFilter = {
  is?: OtherTraitWhereInput | null
  isNot?: OtherTraitWhereInput | null
}

export type StringNullableFilter = {
  equals?: string | null
  in?: Enumerable<string> | null
  notIn?: Enumerable<string> | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: string | NestedStringNullableFilter | null
}

export type CrusadeArmyRelationFilter = {
  is?: CrusadeArmyWhereInput | null
  isNot?: CrusadeArmyWhereInput | null
}

export type OtherTraitListRelationFilter = {
  every?: OtherTraitWhereInput
  some?: OtherTraitWhereInput
  none?: OtherTraitWhereInput
}

export type CrusadeUnitRelationFilter = {
  is?: CrusadeUnitWhereInput | null
  isNot?: CrusadeUnitWhereInput | null
}

export type NameEffectListRelationFilter = {
  every?: NameEffectWhereInput
  some?: NameEffectWhereInput
  none?: NameEffectWhereInput
}

export type NameEffectCreateOneWithoutCrusadeArmyInput = {
  create?: NameEffectCreateWithoutCrusadeArmyInput
  connect?: NameEffectWhereUniqueInput
}

export type CrusadeUnitCreateManyWithoutCrusadeArmyInput = {
  create?: CrusadeUnitCreateWithoutCrusadeArmyInput | Enumerable<CrusadeUnitCreateWithoutCrusadeArmyInput>
  connect?: CrusadeUnitWhereUniqueInput | Enumerable<CrusadeUnitWhereUniqueInput>
}

export type IntFieldUpdateOperationsInput = {
  set?: number
  increment?: number
  decrement?: number
  multiply?: number
  divide?: number
}

export type StringFieldUpdateOperationsInput = {
  set?: string
}

export type DateTimeFieldUpdateOperationsInput = {
  set?: Date | string
}

export type NameEffectUpdateOneWithoutCrusadeArmyInput = {
  create?: NameEffectCreateWithoutCrusadeArmyInput
  connect?: NameEffectWhereUniqueInput
  disconnect?: boolean
  delete?: boolean
  update?: NameEffectUpdateWithoutCrusadeArmyDataInput
  upsert?: NameEffectUpsertWithoutCrusadeArmyInput
}

export type CrusadeUnitUpdateManyWithoutCrusadeArmyInput = {
  create?: CrusadeUnitCreateWithoutCrusadeArmyInput | Enumerable<CrusadeUnitCreateWithoutCrusadeArmyInput>
  connect?: CrusadeUnitWhereUniqueInput | Enumerable<CrusadeUnitWhereUniqueInput>
  set?: CrusadeUnitWhereUniqueInput | Enumerable<CrusadeUnitWhereUniqueInput>
  disconnect?: CrusadeUnitWhereUniqueInput | Enumerable<CrusadeUnitWhereUniqueInput>
  delete?: CrusadeUnitWhereUniqueInput | Enumerable<CrusadeUnitWhereUniqueInput>
  update?: CrusadeUnitUpdateWithWhereUniqueWithoutCrusadeArmyInput | Enumerable<CrusadeUnitUpdateWithWhereUniqueWithoutCrusadeArmyInput>
  updateMany?: CrusadeUnitUpdateManyWithWhereNestedInput | Enumerable<CrusadeUnitUpdateManyWithWhereNestedInput>
  deleteMany?: CrusadeUnitScalarWhereInput | Enumerable<CrusadeUnitScalarWhereInput>
  upsert?: CrusadeUnitUpsertWithWhereUniqueWithoutCrusadeArmyInput | Enumerable<CrusadeUnitUpsertWithWhereUniqueWithoutCrusadeArmyInput>
}

export type CrusadeArmyCreateManyWithoutDetachmentTraitInput = {
  create?: CrusadeArmyCreateWithoutDetachmentTraitInput | Enumerable<CrusadeArmyCreateWithoutDetachmentTraitInput>
  connect?: CrusadeArmyWhereUniqueInput | Enumerable<CrusadeArmyWhereUniqueInput>
}

export type CrusadeUnitCreateManyWithoutRelicInput = {
  create?: CrusadeUnitCreateWithoutRelicInput | Enumerable<CrusadeUnitCreateWithoutRelicInput>
  connect?: CrusadeUnitWhereUniqueInput | Enumerable<CrusadeUnitWhereUniqueInput>
}

export type CrusadeUnitCreateManyWithoutWarlordTraitInput = {
  create?: CrusadeUnitCreateWithoutWarlordTraitInput | Enumerable<CrusadeUnitCreateWithoutWarlordTraitInput>
  connect?: CrusadeUnitWhereUniqueInput | Enumerable<CrusadeUnitWhereUniqueInput>
}

export type BattleHonourCreateManyWithoutBattleTraitInput = {
  create?: BattleHonourCreateWithoutBattleTraitInput | Enumerable<BattleHonourCreateWithoutBattleTraitInput>
  connect?: BattleHonourWhereUniqueInput | Enumerable<BattleHonourWhereUniqueInput>
}

export type OtherTraitCreateOneWithoutNameEffectsInput = {
  create?: OtherTraitCreateWithoutNameEffectsInput
  connect?: OtherTraitWhereUniqueInput
}

export type CrusadeArmyUpdateManyWithoutDetachmentTraitInput = {
  create?: CrusadeArmyCreateWithoutDetachmentTraitInput | Enumerable<CrusadeArmyCreateWithoutDetachmentTraitInput>
  connect?: CrusadeArmyWhereUniqueInput | Enumerable<CrusadeArmyWhereUniqueInput>
  set?: CrusadeArmyWhereUniqueInput | Enumerable<CrusadeArmyWhereUniqueInput>
  disconnect?: CrusadeArmyWhereUniqueInput | Enumerable<CrusadeArmyWhereUniqueInput>
  delete?: CrusadeArmyWhereUniqueInput | Enumerable<CrusadeArmyWhereUniqueInput>
  update?: CrusadeArmyUpdateWithWhereUniqueWithoutDetachmentTraitInput | Enumerable<CrusadeArmyUpdateWithWhereUniqueWithoutDetachmentTraitInput>
  updateMany?: CrusadeArmyUpdateManyWithWhereNestedInput | Enumerable<CrusadeArmyUpdateManyWithWhereNestedInput>
  deleteMany?: CrusadeArmyScalarWhereInput | Enumerable<CrusadeArmyScalarWhereInput>
  upsert?: CrusadeArmyUpsertWithWhereUniqueWithoutDetachmentTraitInput | Enumerable<CrusadeArmyUpsertWithWhereUniqueWithoutDetachmentTraitInput>
}

export type CrusadeUnitUpdateManyWithoutRelicInput = {
  create?: CrusadeUnitCreateWithoutRelicInput | Enumerable<CrusadeUnitCreateWithoutRelicInput>
  connect?: CrusadeUnitWhereUniqueInput | Enumerable<CrusadeUnitWhereUniqueInput>
  set?: CrusadeUnitWhereUniqueInput | Enumerable<CrusadeUnitWhereUniqueInput>
  disconnect?: CrusadeUnitWhereUniqueInput | Enumerable<CrusadeUnitWhereUniqueInput>
  delete?: CrusadeUnitWhereUniqueInput | Enumerable<CrusadeUnitWhereUniqueInput>
  update?: CrusadeUnitUpdateWithWhereUniqueWithoutRelicInput | Enumerable<CrusadeUnitUpdateWithWhereUniqueWithoutRelicInput>
  updateMany?: CrusadeUnitUpdateManyWithWhereNestedInput | Enumerable<CrusadeUnitUpdateManyWithWhereNestedInput>
  deleteMany?: CrusadeUnitScalarWhereInput | Enumerable<CrusadeUnitScalarWhereInput>
  upsert?: CrusadeUnitUpsertWithWhereUniqueWithoutRelicInput | Enumerable<CrusadeUnitUpsertWithWhereUniqueWithoutRelicInput>
}

export type CrusadeUnitUpdateManyWithoutWarlordTraitInput = {
  create?: CrusadeUnitCreateWithoutWarlordTraitInput | Enumerable<CrusadeUnitCreateWithoutWarlordTraitInput>
  connect?: CrusadeUnitWhereUniqueInput | Enumerable<CrusadeUnitWhereUniqueInput>
  set?: CrusadeUnitWhereUniqueInput | Enumerable<CrusadeUnitWhereUniqueInput>
  disconnect?: CrusadeUnitWhereUniqueInput | Enumerable<CrusadeUnitWhereUniqueInput>
  delete?: CrusadeUnitWhereUniqueInput | Enumerable<CrusadeUnitWhereUniqueInput>
  update?: CrusadeUnitUpdateWithWhereUniqueWithoutWarlordTraitInput | Enumerable<CrusadeUnitUpdateWithWhereUniqueWithoutWarlordTraitInput>
  updateMany?: CrusadeUnitUpdateManyWithWhereNestedInput | Enumerable<CrusadeUnitUpdateManyWithWhereNestedInput>
  deleteMany?: CrusadeUnitScalarWhereInput | Enumerable<CrusadeUnitScalarWhereInput>
  upsert?: CrusadeUnitUpsertWithWhereUniqueWithoutWarlordTraitInput | Enumerable<CrusadeUnitUpsertWithWhereUniqueWithoutWarlordTraitInput>
}

export type BattleHonourUpdateManyWithoutBattleTraitInput = {
  create?: BattleHonourCreateWithoutBattleTraitInput | Enumerable<BattleHonourCreateWithoutBattleTraitInput>
  connect?: BattleHonourWhereUniqueInput | Enumerable<BattleHonourWhereUniqueInput>
  set?: BattleHonourWhereUniqueInput | Enumerable<BattleHonourWhereUniqueInput>
  disconnect?: BattleHonourWhereUniqueInput | Enumerable<BattleHonourWhereUniqueInput>
  delete?: BattleHonourWhereUniqueInput | Enumerable<BattleHonourWhereUniqueInput>
  update?: BattleHonourUpdateWithWhereUniqueWithoutBattleTraitInput | Enumerable<BattleHonourUpdateWithWhereUniqueWithoutBattleTraitInput>
  updateMany?: BattleHonourUpdateManyWithWhereNestedInput | Enumerable<BattleHonourUpdateManyWithWhereNestedInput>
  deleteMany?: BattleHonourScalarWhereInput | Enumerable<BattleHonourScalarWhereInput>
  upsert?: BattleHonourUpsertWithWhereUniqueWithoutBattleTraitInput | Enumerable<BattleHonourUpsertWithWhereUniqueWithoutBattleTraitInput>
}

export type OtherTraitUpdateOneWithoutNameEffectsInput = {
  create?: OtherTraitCreateWithoutNameEffectsInput
  connect?: OtherTraitWhereUniqueInput
  disconnect?: boolean
  delete?: boolean
  update?: OtherTraitUpdateWithoutNameEffectsDataInput
  upsert?: OtherTraitUpsertWithoutNameEffectsInput
}

export type NameEffectCreateOneWithoutRelicInput = {
  create?: NameEffectCreateWithoutRelicInput
  connect?: NameEffectWhereUniqueInput
}

export type NameEffectCreateOneWithoutWarlordTraitInput = {
  create?: NameEffectCreateWithoutWarlordTraitInput
  connect?: NameEffectWhereUniqueInput
}

export type CrusadeArmyCreateOneWithoutUnitsInput = {
  create?: CrusadeArmyCreateWithoutUnitsInput
  connect?: CrusadeArmyWhereUniqueInput
}

export type BattleHonourCreateManyWithoutCrusadeUnitInput = {
  create?: BattleHonourCreateWithoutCrusadeUnitInput | Enumerable<BattleHonourCreateWithoutCrusadeUnitInput>
  connect?: BattleHonourWhereUniqueInput | Enumerable<BattleHonourWhereUniqueInput>
}

export type OtherTraitCreateManyWithoutCrusadeUnitInput = {
  create?: OtherTraitCreateWithoutCrusadeUnitInput | Enumerable<OtherTraitCreateWithoutCrusadeUnitInput>
  connect?: OtherTraitWhereUniqueInput | Enumerable<OtherTraitWhereUniqueInput>
}

export type NullableStringFieldUpdateOperationsInput = {
  set?: string | null
}

export type NameEffectUpdateOneWithoutRelicInput = {
  create?: NameEffectCreateWithoutRelicInput
  connect?: NameEffectWhereUniqueInput
  disconnect?: boolean
  delete?: boolean
  update?: NameEffectUpdateWithoutRelicDataInput
  upsert?: NameEffectUpsertWithoutRelicInput
}

export type NameEffectUpdateOneWithoutWarlordTraitInput = {
  create?: NameEffectCreateWithoutWarlordTraitInput
  connect?: NameEffectWhereUniqueInput
  disconnect?: boolean
  delete?: boolean
  update?: NameEffectUpdateWithoutWarlordTraitDataInput
  upsert?: NameEffectUpsertWithoutWarlordTraitInput
}

export type CrusadeArmyUpdateOneWithoutUnitsInput = {
  create?: CrusadeArmyCreateWithoutUnitsInput
  connect?: CrusadeArmyWhereUniqueInput
  disconnect?: boolean
  delete?: boolean
  update?: CrusadeArmyUpdateWithoutUnitsDataInput
  upsert?: CrusadeArmyUpsertWithoutUnitsInput
}

export type BattleHonourUpdateManyWithoutCrusadeUnitInput = {
  create?: BattleHonourCreateWithoutCrusadeUnitInput | Enumerable<BattleHonourCreateWithoutCrusadeUnitInput>
  connect?: BattleHonourWhereUniqueInput | Enumerable<BattleHonourWhereUniqueInput>
  set?: BattleHonourWhereUniqueInput | Enumerable<BattleHonourWhereUniqueInput>
  disconnect?: BattleHonourWhereUniqueInput | Enumerable<BattleHonourWhereUniqueInput>
  delete?: BattleHonourWhereUniqueInput | Enumerable<BattleHonourWhereUniqueInput>
  update?: BattleHonourUpdateWithWhereUniqueWithoutCrusadeUnitInput | Enumerable<BattleHonourUpdateWithWhereUniqueWithoutCrusadeUnitInput>
  updateMany?: BattleHonourUpdateManyWithWhereNestedInput | Enumerable<BattleHonourUpdateManyWithWhereNestedInput>
  deleteMany?: BattleHonourScalarWhereInput | Enumerable<BattleHonourScalarWhereInput>
  upsert?: BattleHonourUpsertWithWhereUniqueWithoutCrusadeUnitInput | Enumerable<BattleHonourUpsertWithWhereUniqueWithoutCrusadeUnitInput>
}

export type OtherTraitUpdateManyWithoutCrusadeUnitInput = {
  create?: OtherTraitCreateWithoutCrusadeUnitInput | Enumerable<OtherTraitCreateWithoutCrusadeUnitInput>
  connect?: OtherTraitWhereUniqueInput | Enumerable<OtherTraitWhereUniqueInput>
  set?: OtherTraitWhereUniqueInput | Enumerable<OtherTraitWhereUniqueInput>
  disconnect?: OtherTraitWhereUniqueInput | Enumerable<OtherTraitWhereUniqueInput>
  delete?: OtherTraitWhereUniqueInput | Enumerable<OtherTraitWhereUniqueInput>
  update?: OtherTraitUpdateWithWhereUniqueWithoutCrusadeUnitInput | Enumerable<OtherTraitUpdateWithWhereUniqueWithoutCrusadeUnitInput>
  updateMany?: OtherTraitUpdateManyWithWhereNestedInput | Enumerable<OtherTraitUpdateManyWithWhereNestedInput>
  deleteMany?: OtherTraitScalarWhereInput | Enumerable<OtherTraitScalarWhereInput>
  upsert?: OtherTraitUpsertWithWhereUniqueWithoutCrusadeUnitInput | Enumerable<OtherTraitUpsertWithWhereUniqueWithoutCrusadeUnitInput>
}

export type NameEffectCreateOneWithoutBattleHonourInput = {
  create?: NameEffectCreateWithoutBattleHonourInput
  connect?: NameEffectWhereUniqueInput
}

export type CrusadeUnitCreateOneWithoutBattleHonoursInput = {
  create?: CrusadeUnitCreateWithoutBattleHonoursInput
  connect?: CrusadeUnitWhereUniqueInput
}

export type NameEffectUpdateOneWithoutBattleHonourInput = {
  create?: NameEffectCreateWithoutBattleHonourInput
  connect?: NameEffectWhereUniqueInput
  disconnect?: boolean
  delete?: boolean
  update?: NameEffectUpdateWithoutBattleHonourDataInput
  upsert?: NameEffectUpsertWithoutBattleHonourInput
}

export type CrusadeUnitUpdateOneWithoutBattleHonoursInput = {
  create?: CrusadeUnitCreateWithoutBattleHonoursInput
  connect?: CrusadeUnitWhereUniqueInput
  disconnect?: boolean
  delete?: boolean
  update?: CrusadeUnitUpdateWithoutBattleHonoursDataInput
  upsert?: CrusadeUnitUpsertWithoutBattleHonoursInput
}

export type NameEffectCreateManyWithoutOtherTraitInput = {
  create?: NameEffectCreateWithoutOtherTraitInput | Enumerable<NameEffectCreateWithoutOtherTraitInput>
  connect?: NameEffectWhereUniqueInput | Enumerable<NameEffectWhereUniqueInput>
}

export type CrusadeUnitCreateManyWithoutOtherTraitInput = {
  create?: CrusadeUnitCreateWithoutOtherTraitInput | Enumerable<CrusadeUnitCreateWithoutOtherTraitInput>
  connect?: CrusadeUnitWhereUniqueInput | Enumerable<CrusadeUnitWhereUniqueInput>
}

export type NameEffectUpdateManyWithoutOtherTraitInput = {
  create?: NameEffectCreateWithoutOtherTraitInput | Enumerable<NameEffectCreateWithoutOtherTraitInput>
  connect?: NameEffectWhereUniqueInput | Enumerable<NameEffectWhereUniqueInput>
  set?: NameEffectWhereUniqueInput | Enumerable<NameEffectWhereUniqueInput>
  disconnect?: NameEffectWhereUniqueInput | Enumerable<NameEffectWhereUniqueInput>
  delete?: NameEffectWhereUniqueInput | Enumerable<NameEffectWhereUniqueInput>
  update?: NameEffectUpdateWithWhereUniqueWithoutOtherTraitInput | Enumerable<NameEffectUpdateWithWhereUniqueWithoutOtherTraitInput>
  updateMany?: NameEffectUpdateManyWithWhereNestedInput | Enumerable<NameEffectUpdateManyWithWhereNestedInput>
  deleteMany?: NameEffectScalarWhereInput | Enumerable<NameEffectScalarWhereInput>
  upsert?: NameEffectUpsertWithWhereUniqueWithoutOtherTraitInput | Enumerable<NameEffectUpsertWithWhereUniqueWithoutOtherTraitInput>
}

export type CrusadeUnitUpdateManyWithoutOtherTraitInput = {
  create?: CrusadeUnitCreateWithoutOtherTraitInput | Enumerable<CrusadeUnitCreateWithoutOtherTraitInput>
  connect?: CrusadeUnitWhereUniqueInput | Enumerable<CrusadeUnitWhereUniqueInput>
  set?: CrusadeUnitWhereUniqueInput | Enumerable<CrusadeUnitWhereUniqueInput>
  disconnect?: CrusadeUnitWhereUniqueInput | Enumerable<CrusadeUnitWhereUniqueInput>
  delete?: CrusadeUnitWhereUniqueInput | Enumerable<CrusadeUnitWhereUniqueInput>
  update?: CrusadeUnitUpdateWithWhereUniqueWithoutOtherTraitInput | Enumerable<CrusadeUnitUpdateWithWhereUniqueWithoutOtherTraitInput>
  updateMany?: CrusadeUnitUpdateManyWithWhereNestedInput | Enumerable<CrusadeUnitUpdateManyWithWhereNestedInput>
  deleteMany?: CrusadeUnitScalarWhereInput | Enumerable<CrusadeUnitScalarWhereInput>
  upsert?: CrusadeUnitUpsertWithWhereUniqueWithoutOtherTraitInput | Enumerable<CrusadeUnitUpsertWithWhereUniqueWithoutOtherTraitInput>
}

export type NestedIntFilter = {
  equals?: number
  in?: Enumerable<number>
  notIn?: Enumerable<number>
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: number | NestedIntFilter
}

export type NestedStringFilter = {
  equals?: string
  in?: Enumerable<string>
  notIn?: Enumerable<string>
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: string | NestedStringFilter
}

export type NestedDateTimeFilter = {
  equals?: Date | string
  in?: Enumerable<Date> | Enumerable<string>
  notIn?: Enumerable<Date> | Enumerable<string>
  lt?: Date | string
  lte?: Date | string
  gt?: Date | string
  gte?: Date | string
  not?: Date | string | NestedDateTimeFilter
}

export type NestedIntNullableFilter = {
  equals?: number | null
  in?: Enumerable<number> | null
  notIn?: Enumerable<number> | null
  lt?: number
  lte?: number
  gt?: number
  gte?: number
  not?: number | NestedIntNullableFilter | null
}

export type NestedStringNullableFilter = {
  equals?: string | null
  in?: Enumerable<string> | null
  notIn?: Enumerable<string> | null
  lt?: string
  lte?: string
  gt?: string
  gte?: string
  contains?: string
  startsWith?: string
  endsWith?: string
  not?: string | NestedStringNullableFilter | null
}

export type NameEffectCreateWithoutCrusadeArmyInput = {
  name: string
  effect: string
  Relic?: CrusadeUnitCreateManyWithoutRelicInput
  WarlordTrait?: CrusadeUnitCreateManyWithoutWarlordTraitInput
  BattleHonour?: BattleHonourCreateManyWithoutBattleTraitInput
  OtherTrait?: OtherTraitCreateOneWithoutNameEffectsInput
}

export type CrusadeUnitCreateWithoutCrusadeArmyInput = {
  name: string
  alternateName?: string | null
  agendaXp: number
  battleParticipation: number
  experienceLoss: number
  kills: number
  markedForGreatness: number
  notes?: string | null
  powerLevel: number
  sequenceNumber: number
  relic?: NameEffectCreateOneWithoutRelicInput
  warlordTrait?: NameEffectCreateOneWithoutWarlordTraitInput
  battleHonours?: BattleHonourCreateManyWithoutCrusadeUnitInput
  OtherTrait?: OtherTraitCreateManyWithoutCrusadeUnitInput
}

export type NameEffectUpdateWithoutCrusadeArmyDataInput = {
  name?: string | StringFieldUpdateOperationsInput
  effect?: string | StringFieldUpdateOperationsInput
  Relic?: CrusadeUnitUpdateManyWithoutRelicInput
  WarlordTrait?: CrusadeUnitUpdateManyWithoutWarlordTraitInput
  BattleHonour?: BattleHonourUpdateManyWithoutBattleTraitInput
  OtherTrait?: OtherTraitUpdateOneWithoutNameEffectsInput
}

export type NameEffectUpsertWithoutCrusadeArmyInput = {
  update: NameEffectUpdateWithoutCrusadeArmyDataInput
  create: NameEffectCreateWithoutCrusadeArmyInput
}

export type CrusadeUnitUpdateWithWhereUniqueWithoutCrusadeArmyInput = {
  where: CrusadeUnitWhereUniqueInput
  data: CrusadeUnitUpdateWithoutCrusadeArmyDataInput
}

export type CrusadeUnitUpdateManyWithWhereNestedInput = {
  where: CrusadeUnitScalarWhereInput
  data: CrusadeUnitUpdateManyDataInput
}

export type CrusadeUnitScalarWhereInput = {
  AND?: CrusadeUnitScalarWhereInput | Enumerable<CrusadeUnitScalarWhereInput>
  OR?: CrusadeUnitScalarWhereInput | Enumerable<CrusadeUnitScalarWhereInput>
  NOT?: CrusadeUnitScalarWhereInput | Enumerable<CrusadeUnitScalarWhereInput>
  id?: IntFilter | number
  name?: StringFilter | string
  alternateName?: StringNullableFilter | string | null
  agendaXp?: IntFilter | number
  battleParticipation?: IntFilter | number
  experienceLoss?: IntFilter | number
  kills?: IntFilter | number
  markedForGreatness?: IntFilter | number
  notes?: StringNullableFilter | string | null
  powerLevel?: IntFilter | number
  relicId?: IntNullableFilter | number | null
  sequenceNumber?: IntFilter | number
  warlordTraitId?: IntNullableFilter | number | null
  crusadeArmyId?: IntNullableFilter | number | null
}

export type CrusadeUnitUpsertWithWhereUniqueWithoutCrusadeArmyInput = {
  where: CrusadeUnitWhereUniqueInput
  update: CrusadeUnitUpdateWithoutCrusadeArmyDataInput
  create: CrusadeUnitCreateWithoutCrusadeArmyInput
}

export type CrusadeArmyCreateWithoutDetachmentTraitInput = {
  requisitionPoints: number
  traitColor: string
  maximumPowerLevel: number
  createdAt?: Date | string
  name?: string
  units?: CrusadeUnitCreateManyWithoutCrusadeArmyInput
}

export type CrusadeUnitCreateWithoutRelicInput = {
  name: string
  alternateName?: string | null
  agendaXp: number
  battleParticipation: number
  experienceLoss: number
  kills: number
  markedForGreatness: number
  notes?: string | null
  powerLevel: number
  sequenceNumber: number
  warlordTrait?: NameEffectCreateOneWithoutWarlordTraitInput
  CrusadeArmy?: CrusadeArmyCreateOneWithoutUnitsInput
  battleHonours?: BattleHonourCreateManyWithoutCrusadeUnitInput
  OtherTrait?: OtherTraitCreateManyWithoutCrusadeUnitInput
}

export type CrusadeUnitCreateWithoutWarlordTraitInput = {
  name: string
  alternateName?: string | null
  agendaXp: number
  battleParticipation: number
  experienceLoss: number
  kills: number
  markedForGreatness: number
  notes?: string | null
  powerLevel: number
  sequenceNumber: number
  relic?: NameEffectCreateOneWithoutRelicInput
  CrusadeArmy?: CrusadeArmyCreateOneWithoutUnitsInput
  battleHonours?: BattleHonourCreateManyWithoutCrusadeUnitInput
  OtherTrait?: OtherTraitCreateManyWithoutCrusadeUnitInput
}

export type BattleHonourCreateWithoutBattleTraitInput = {
  crusadePoints: number
  rank: string
  CrusadeUnit?: CrusadeUnitCreateOneWithoutBattleHonoursInput
}

export type OtherTraitCreateWithoutNameEffectsInput = {
  name: string
  CrusadeUnit?: CrusadeUnitCreateManyWithoutOtherTraitInput
}

export type CrusadeArmyUpdateWithWhereUniqueWithoutDetachmentTraitInput = {
  where: CrusadeArmyWhereUniqueInput
  data: CrusadeArmyUpdateWithoutDetachmentTraitDataInput
}

export type CrusadeArmyUpdateManyWithWhereNestedInput = {
  where: CrusadeArmyScalarWhereInput
  data: CrusadeArmyUpdateManyDataInput
}

export type CrusadeArmyScalarWhereInput = {
  AND?: CrusadeArmyScalarWhereInput | Enumerable<CrusadeArmyScalarWhereInput>
  OR?: CrusadeArmyScalarWhereInput | Enumerable<CrusadeArmyScalarWhereInput>
  NOT?: CrusadeArmyScalarWhereInput | Enumerable<CrusadeArmyScalarWhereInput>
  id?: IntFilter | number
  requisitionPoints?: IntFilter | number
  traitColor?: StringFilter | string
  maximumPowerLevel?: IntFilter | number
  createdAt?: DateTimeFilter | Date | string
  name?: StringFilter | string
  detachmentTraitId?: IntNullableFilter | number | null
}

export type CrusadeArmyUpsertWithWhereUniqueWithoutDetachmentTraitInput = {
  where: CrusadeArmyWhereUniqueInput
  update: CrusadeArmyUpdateWithoutDetachmentTraitDataInput
  create: CrusadeArmyCreateWithoutDetachmentTraitInput
}

export type CrusadeUnitUpdateWithWhereUniqueWithoutRelicInput = {
  where: CrusadeUnitWhereUniqueInput
  data: CrusadeUnitUpdateWithoutRelicDataInput
}

export type CrusadeUnitUpsertWithWhereUniqueWithoutRelicInput = {
  where: CrusadeUnitWhereUniqueInput
  update: CrusadeUnitUpdateWithoutRelicDataInput
  create: CrusadeUnitCreateWithoutRelicInput
}

export type CrusadeUnitUpdateWithWhereUniqueWithoutWarlordTraitInput = {
  where: CrusadeUnitWhereUniqueInput
  data: CrusadeUnitUpdateWithoutWarlordTraitDataInput
}

export type CrusadeUnitUpsertWithWhereUniqueWithoutWarlordTraitInput = {
  where: CrusadeUnitWhereUniqueInput
  update: CrusadeUnitUpdateWithoutWarlordTraitDataInput
  create: CrusadeUnitCreateWithoutWarlordTraitInput
}

export type BattleHonourUpdateWithWhereUniqueWithoutBattleTraitInput = {
  where: BattleHonourWhereUniqueInput
  data: BattleHonourUpdateWithoutBattleTraitDataInput
}

export type BattleHonourUpdateManyWithWhereNestedInput = {
  where: BattleHonourScalarWhereInput
  data: BattleHonourUpdateManyDataInput
}

export type BattleHonourScalarWhereInput = {
  AND?: BattleHonourScalarWhereInput | Enumerable<BattleHonourScalarWhereInput>
  OR?: BattleHonourScalarWhereInput | Enumerable<BattleHonourScalarWhereInput>
  NOT?: BattleHonourScalarWhereInput | Enumerable<BattleHonourScalarWhereInput>
  id?: IntFilter | number
  crusadePoints?: IntFilter | number
  battleTraitId?: IntNullableFilter | number | null
  rank?: StringFilter | string
  crusadeUnitId?: IntNullableFilter | number | null
}

export type BattleHonourUpsertWithWhereUniqueWithoutBattleTraitInput = {
  where: BattleHonourWhereUniqueInput
  update: BattleHonourUpdateWithoutBattleTraitDataInput
  create: BattleHonourCreateWithoutBattleTraitInput
}

export type OtherTraitUpdateWithoutNameEffectsDataInput = {
  name?: string | StringFieldUpdateOperationsInput
  CrusadeUnit?: CrusadeUnitUpdateManyWithoutOtherTraitInput
}

export type OtherTraitUpsertWithoutNameEffectsInput = {
  update: OtherTraitUpdateWithoutNameEffectsDataInput
  create: OtherTraitCreateWithoutNameEffectsInput
}

export type NameEffectCreateWithoutRelicInput = {
  name: string
  effect: string
  CrusadeArmy?: CrusadeArmyCreateManyWithoutDetachmentTraitInput
  WarlordTrait?: CrusadeUnitCreateManyWithoutWarlordTraitInput
  BattleHonour?: BattleHonourCreateManyWithoutBattleTraitInput
  OtherTrait?: OtherTraitCreateOneWithoutNameEffectsInput
}

export type NameEffectCreateWithoutWarlordTraitInput = {
  name: string
  effect: string
  CrusadeArmy?: CrusadeArmyCreateManyWithoutDetachmentTraitInput
  Relic?: CrusadeUnitCreateManyWithoutRelicInput
  BattleHonour?: BattleHonourCreateManyWithoutBattleTraitInput
  OtherTrait?: OtherTraitCreateOneWithoutNameEffectsInput
}

export type CrusadeArmyCreateWithoutUnitsInput = {
  requisitionPoints: number
  traitColor: string
  maximumPowerLevel: number
  createdAt?: Date | string
  name?: string
  detachmentTrait?: NameEffectCreateOneWithoutCrusadeArmyInput
}

export type BattleHonourCreateWithoutCrusadeUnitInput = {
  crusadePoints: number
  rank: string
  battleTrait?: NameEffectCreateOneWithoutBattleHonourInput
}

export type OtherTraitCreateWithoutCrusadeUnitInput = {
  name: string
  nameEffects?: NameEffectCreateManyWithoutOtherTraitInput
}

export type NameEffectUpdateWithoutRelicDataInput = {
  name?: string | StringFieldUpdateOperationsInput
  effect?: string | StringFieldUpdateOperationsInput
  CrusadeArmy?: CrusadeArmyUpdateManyWithoutDetachmentTraitInput
  WarlordTrait?: CrusadeUnitUpdateManyWithoutWarlordTraitInput
  BattleHonour?: BattleHonourUpdateManyWithoutBattleTraitInput
  OtherTrait?: OtherTraitUpdateOneWithoutNameEffectsInput
}

export type NameEffectUpsertWithoutRelicInput = {
  update: NameEffectUpdateWithoutRelicDataInput
  create: NameEffectCreateWithoutRelicInput
}

export type NameEffectUpdateWithoutWarlordTraitDataInput = {
  name?: string | StringFieldUpdateOperationsInput
  effect?: string | StringFieldUpdateOperationsInput
  CrusadeArmy?: CrusadeArmyUpdateManyWithoutDetachmentTraitInput
  Relic?: CrusadeUnitUpdateManyWithoutRelicInput
  BattleHonour?: BattleHonourUpdateManyWithoutBattleTraitInput
  OtherTrait?: OtherTraitUpdateOneWithoutNameEffectsInput
}

export type NameEffectUpsertWithoutWarlordTraitInput = {
  update: NameEffectUpdateWithoutWarlordTraitDataInput
  create: NameEffectCreateWithoutWarlordTraitInput
}

export type CrusadeArmyUpdateWithoutUnitsDataInput = {
  requisitionPoints?: number | IntFieldUpdateOperationsInput
  traitColor?: string | StringFieldUpdateOperationsInput
  maximumPowerLevel?: number | IntFieldUpdateOperationsInput
  createdAt?: Date | string | DateTimeFieldUpdateOperationsInput
  name?: string | StringFieldUpdateOperationsInput
  detachmentTrait?: NameEffectUpdateOneWithoutCrusadeArmyInput
}

export type CrusadeArmyUpsertWithoutUnitsInput = {
  update: CrusadeArmyUpdateWithoutUnitsDataInput
  create: CrusadeArmyCreateWithoutUnitsInput
}

export type BattleHonourUpdateWithWhereUniqueWithoutCrusadeUnitInput = {
  where: BattleHonourWhereUniqueInput
  data: BattleHonourUpdateWithoutCrusadeUnitDataInput
}

export type BattleHonourUpsertWithWhereUniqueWithoutCrusadeUnitInput = {
  where: BattleHonourWhereUniqueInput
  update: BattleHonourUpdateWithoutCrusadeUnitDataInput
  create: BattleHonourCreateWithoutCrusadeUnitInput
}

export type OtherTraitUpdateWithWhereUniqueWithoutCrusadeUnitInput = {
  where: OtherTraitWhereUniqueInput
  data: OtherTraitUpdateWithoutCrusadeUnitDataInput
}

export type OtherTraitUpdateManyWithWhereNestedInput = {
  where: OtherTraitScalarWhereInput
  data: OtherTraitUpdateManyDataInput
}

export type OtherTraitScalarWhereInput = {
  AND?: OtherTraitScalarWhereInput | Enumerable<OtherTraitScalarWhereInput>
  OR?: OtherTraitScalarWhereInput | Enumerable<OtherTraitScalarWhereInput>
  NOT?: OtherTraitScalarWhereInput | Enumerable<OtherTraitScalarWhereInput>
  id?: IntFilter | number
  name?: StringFilter | string
}

export type OtherTraitUpsertWithWhereUniqueWithoutCrusadeUnitInput = {
  where: OtherTraitWhereUniqueInput
  update: OtherTraitUpdateWithoutCrusadeUnitDataInput
  create: OtherTraitCreateWithoutCrusadeUnitInput
}

export type NameEffectCreateWithoutBattleHonourInput = {
  name: string
  effect: string
  CrusadeArmy?: CrusadeArmyCreateManyWithoutDetachmentTraitInput
  Relic?: CrusadeUnitCreateManyWithoutRelicInput
  WarlordTrait?: CrusadeUnitCreateManyWithoutWarlordTraitInput
  OtherTrait?: OtherTraitCreateOneWithoutNameEffectsInput
}

export type CrusadeUnitCreateWithoutBattleHonoursInput = {
  name: string
  alternateName?: string | null
  agendaXp: number
  battleParticipation: number
  experienceLoss: number
  kills: number
  markedForGreatness: number
  notes?: string | null
  powerLevel: number
  sequenceNumber: number
  relic?: NameEffectCreateOneWithoutRelicInput
  warlordTrait?: NameEffectCreateOneWithoutWarlordTraitInput
  CrusadeArmy?: CrusadeArmyCreateOneWithoutUnitsInput
  OtherTrait?: OtherTraitCreateManyWithoutCrusadeUnitInput
}

export type NameEffectUpdateWithoutBattleHonourDataInput = {
  name?: string | StringFieldUpdateOperationsInput
  effect?: string | StringFieldUpdateOperationsInput
  CrusadeArmy?: CrusadeArmyUpdateManyWithoutDetachmentTraitInput
  Relic?: CrusadeUnitUpdateManyWithoutRelicInput
  WarlordTrait?: CrusadeUnitUpdateManyWithoutWarlordTraitInput
  OtherTrait?: OtherTraitUpdateOneWithoutNameEffectsInput
}

export type NameEffectUpsertWithoutBattleHonourInput = {
  update: NameEffectUpdateWithoutBattleHonourDataInput
  create: NameEffectCreateWithoutBattleHonourInput
}

export type CrusadeUnitUpdateWithoutBattleHonoursDataInput = {
  name?: string | StringFieldUpdateOperationsInput
  alternateName?: string | NullableStringFieldUpdateOperationsInput | null
  agendaXp?: number | IntFieldUpdateOperationsInput
  battleParticipation?: number | IntFieldUpdateOperationsInput
  experienceLoss?: number | IntFieldUpdateOperationsInput
  kills?: number | IntFieldUpdateOperationsInput
  markedForGreatness?: number | IntFieldUpdateOperationsInput
  notes?: string | NullableStringFieldUpdateOperationsInput | null
  powerLevel?: number | IntFieldUpdateOperationsInput
  sequenceNumber?: number | IntFieldUpdateOperationsInput
  relic?: NameEffectUpdateOneWithoutRelicInput
  warlordTrait?: NameEffectUpdateOneWithoutWarlordTraitInput
  CrusadeArmy?: CrusadeArmyUpdateOneWithoutUnitsInput
  OtherTrait?: OtherTraitUpdateManyWithoutCrusadeUnitInput
}

export type CrusadeUnitUpsertWithoutBattleHonoursInput = {
  update: CrusadeUnitUpdateWithoutBattleHonoursDataInput
  create: CrusadeUnitCreateWithoutBattleHonoursInput
}

export type NameEffectCreateWithoutOtherTraitInput = {
  name: string
  effect: string
  CrusadeArmy?: CrusadeArmyCreateManyWithoutDetachmentTraitInput
  Relic?: CrusadeUnitCreateManyWithoutRelicInput
  WarlordTrait?: CrusadeUnitCreateManyWithoutWarlordTraitInput
  BattleHonour?: BattleHonourCreateManyWithoutBattleTraitInput
}

export type CrusadeUnitCreateWithoutOtherTraitInput = {
  name: string
  alternateName?: string | null
  agendaXp: number
  battleParticipation: number
  experienceLoss: number
  kills: number
  markedForGreatness: number
  notes?: string | null
  powerLevel: number
  sequenceNumber: number
  relic?: NameEffectCreateOneWithoutRelicInput
  warlordTrait?: NameEffectCreateOneWithoutWarlordTraitInput
  CrusadeArmy?: CrusadeArmyCreateOneWithoutUnitsInput
  battleHonours?: BattleHonourCreateManyWithoutCrusadeUnitInput
}

export type NameEffectUpdateWithWhereUniqueWithoutOtherTraitInput = {
  where: NameEffectWhereUniqueInput
  data: NameEffectUpdateWithoutOtherTraitDataInput
}

export type NameEffectUpdateManyWithWhereNestedInput = {
  where: NameEffectScalarWhereInput
  data: NameEffectUpdateManyDataInput
}

export type NameEffectScalarWhereInput = {
  AND?: NameEffectScalarWhereInput | Enumerable<NameEffectScalarWhereInput>
  OR?: NameEffectScalarWhereInput | Enumerable<NameEffectScalarWhereInput>
  NOT?: NameEffectScalarWhereInput | Enumerable<NameEffectScalarWhereInput>
  id?: IntFilter | number
  name?: StringFilter | string
  effect?: StringFilter | string
  otherTraitId?: IntNullableFilter | number | null
}

export type NameEffectUpsertWithWhereUniqueWithoutOtherTraitInput = {
  where: NameEffectWhereUniqueInput
  update: NameEffectUpdateWithoutOtherTraitDataInput
  create: NameEffectCreateWithoutOtherTraitInput
}

export type CrusadeUnitUpdateWithWhereUniqueWithoutOtherTraitInput = {
  where: CrusadeUnitWhereUniqueInput
  data: CrusadeUnitUpdateWithoutOtherTraitDataInput
}

export type CrusadeUnitUpsertWithWhereUniqueWithoutOtherTraitInput = {
  where: CrusadeUnitWhereUniqueInput
  update: CrusadeUnitUpdateWithoutOtherTraitDataInput
  create: CrusadeUnitCreateWithoutOtherTraitInput
}

export type CrusadeUnitUpdateWithoutCrusadeArmyDataInput = {
  name?: string | StringFieldUpdateOperationsInput
  alternateName?: string | NullableStringFieldUpdateOperationsInput | null
  agendaXp?: number | IntFieldUpdateOperationsInput
  battleParticipation?: number | IntFieldUpdateOperationsInput
  experienceLoss?: number | IntFieldUpdateOperationsInput
  kills?: number | IntFieldUpdateOperationsInput
  markedForGreatness?: number | IntFieldUpdateOperationsInput
  notes?: string | NullableStringFieldUpdateOperationsInput | null
  powerLevel?: number | IntFieldUpdateOperationsInput
  sequenceNumber?: number | IntFieldUpdateOperationsInput
  relic?: NameEffectUpdateOneWithoutRelicInput
  warlordTrait?: NameEffectUpdateOneWithoutWarlordTraitInput
  battleHonours?: BattleHonourUpdateManyWithoutCrusadeUnitInput
  OtherTrait?: OtherTraitUpdateManyWithoutCrusadeUnitInput
}

export type CrusadeUnitUpdateManyDataInput = {
  name?: string | StringFieldUpdateOperationsInput
  alternateName?: string | NullableStringFieldUpdateOperationsInput | null
  agendaXp?: number | IntFieldUpdateOperationsInput
  battleParticipation?: number | IntFieldUpdateOperationsInput
  experienceLoss?: number | IntFieldUpdateOperationsInput
  kills?: number | IntFieldUpdateOperationsInput
  markedForGreatness?: number | IntFieldUpdateOperationsInput
  notes?: string | NullableStringFieldUpdateOperationsInput | null
  powerLevel?: number | IntFieldUpdateOperationsInput
  sequenceNumber?: number | IntFieldUpdateOperationsInput
}

export type CrusadeArmyUpdateWithoutDetachmentTraitDataInput = {
  requisitionPoints?: number | IntFieldUpdateOperationsInput
  traitColor?: string | StringFieldUpdateOperationsInput
  maximumPowerLevel?: number | IntFieldUpdateOperationsInput
  createdAt?: Date | string | DateTimeFieldUpdateOperationsInput
  name?: string | StringFieldUpdateOperationsInput
  units?: CrusadeUnitUpdateManyWithoutCrusadeArmyInput
}

export type CrusadeArmyUpdateManyDataInput = {
  requisitionPoints?: number | IntFieldUpdateOperationsInput
  traitColor?: string | StringFieldUpdateOperationsInput
  maximumPowerLevel?: number | IntFieldUpdateOperationsInput
  createdAt?: Date | string | DateTimeFieldUpdateOperationsInput
  name?: string | StringFieldUpdateOperationsInput
}

export type CrusadeUnitUpdateWithoutRelicDataInput = {
  name?: string | StringFieldUpdateOperationsInput
  alternateName?: string | NullableStringFieldUpdateOperationsInput | null
  agendaXp?: number | IntFieldUpdateOperationsInput
  battleParticipation?: number | IntFieldUpdateOperationsInput
  experienceLoss?: number | IntFieldUpdateOperationsInput
  kills?: number | IntFieldUpdateOperationsInput
  markedForGreatness?: number | IntFieldUpdateOperationsInput
  notes?: string | NullableStringFieldUpdateOperationsInput | null
  powerLevel?: number | IntFieldUpdateOperationsInput
  sequenceNumber?: number | IntFieldUpdateOperationsInput
  warlordTrait?: NameEffectUpdateOneWithoutWarlordTraitInput
  CrusadeArmy?: CrusadeArmyUpdateOneWithoutUnitsInput
  battleHonours?: BattleHonourUpdateManyWithoutCrusadeUnitInput
  OtherTrait?: OtherTraitUpdateManyWithoutCrusadeUnitInput
}

export type CrusadeUnitUpdateWithoutWarlordTraitDataInput = {
  name?: string | StringFieldUpdateOperationsInput
  alternateName?: string | NullableStringFieldUpdateOperationsInput | null
  agendaXp?: number | IntFieldUpdateOperationsInput
  battleParticipation?: number | IntFieldUpdateOperationsInput
  experienceLoss?: number | IntFieldUpdateOperationsInput
  kills?: number | IntFieldUpdateOperationsInput
  markedForGreatness?: number | IntFieldUpdateOperationsInput
  notes?: string | NullableStringFieldUpdateOperationsInput | null
  powerLevel?: number | IntFieldUpdateOperationsInput
  sequenceNumber?: number | IntFieldUpdateOperationsInput
  relic?: NameEffectUpdateOneWithoutRelicInput
  CrusadeArmy?: CrusadeArmyUpdateOneWithoutUnitsInput
  battleHonours?: BattleHonourUpdateManyWithoutCrusadeUnitInput
  OtherTrait?: OtherTraitUpdateManyWithoutCrusadeUnitInput
}

export type BattleHonourUpdateWithoutBattleTraitDataInput = {
  crusadePoints?: number | IntFieldUpdateOperationsInput
  rank?: string | StringFieldUpdateOperationsInput
  CrusadeUnit?: CrusadeUnitUpdateOneWithoutBattleHonoursInput
}

export type BattleHonourUpdateManyDataInput = {
  crusadePoints?: number | IntFieldUpdateOperationsInput
  rank?: string | StringFieldUpdateOperationsInput
}

export type BattleHonourUpdateWithoutCrusadeUnitDataInput = {
  crusadePoints?: number | IntFieldUpdateOperationsInput
  rank?: string | StringFieldUpdateOperationsInput
  battleTrait?: NameEffectUpdateOneWithoutBattleHonourInput
}

export type OtherTraitUpdateWithoutCrusadeUnitDataInput = {
  name?: string | StringFieldUpdateOperationsInput
  nameEffects?: NameEffectUpdateManyWithoutOtherTraitInput
}

export type OtherTraitUpdateManyDataInput = {
  name?: string | StringFieldUpdateOperationsInput
}

export type NameEffectUpdateWithoutOtherTraitDataInput = {
  name?: string | StringFieldUpdateOperationsInput
  effect?: string | StringFieldUpdateOperationsInput
  CrusadeArmy?: CrusadeArmyUpdateManyWithoutDetachmentTraitInput
  Relic?: CrusadeUnitUpdateManyWithoutRelicInput
  WarlordTrait?: CrusadeUnitUpdateManyWithoutWarlordTraitInput
  BattleHonour?: BattleHonourUpdateManyWithoutBattleTraitInput
}

export type NameEffectUpdateManyDataInput = {
  name?: string | StringFieldUpdateOperationsInput
  effect?: string | StringFieldUpdateOperationsInput
}

export type CrusadeUnitUpdateWithoutOtherTraitDataInput = {
  name?: string | StringFieldUpdateOperationsInput
  alternateName?: string | NullableStringFieldUpdateOperationsInput | null
  agendaXp?: number | IntFieldUpdateOperationsInput
  battleParticipation?: number | IntFieldUpdateOperationsInput
  experienceLoss?: number | IntFieldUpdateOperationsInput
  kills?: number | IntFieldUpdateOperationsInput
  markedForGreatness?: number | IntFieldUpdateOperationsInput
  notes?: string | NullableStringFieldUpdateOperationsInput | null
  powerLevel?: number | IntFieldUpdateOperationsInput
  sequenceNumber?: number | IntFieldUpdateOperationsInput
  relic?: NameEffectUpdateOneWithoutRelicInput
  warlordTrait?: NameEffectUpdateOneWithoutWarlordTraitInput
  CrusadeArmy?: CrusadeArmyUpdateOneWithoutUnitsInput
  battleHonours?: BattleHonourUpdateManyWithoutCrusadeUnitInput
}

/**
 * Batch Payload for updateMany & deleteMany
 */

export type BatchPayload = {
  count: number
}

/**
 * DMMF
 */
export declare const dmmf: DMMF.Document;
export {};
