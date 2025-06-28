import { getModelForClass, modelOptions, prop } from '@typegoose/typegoose';

@modelOptions({ schemaOptions: { collection: 'user' } })
class User {
  @prop({ required: true})
  public name!: string;

  @prop({ required: true, unique: true })
  public email!: string;

  @prop()
  public age?: number;

  @prop({ default: () => new Date() })
  public createdAt?: Date;
}

export const UserModel = getModelForClass(User);
export type UserType = InstanceType<typeof User>;