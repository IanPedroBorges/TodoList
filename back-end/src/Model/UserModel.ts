import SequelizeUser from "../database/models/SequelizeUser";
import { NewEntity } from "../interfaces";
import { ICrudCreate, ICrudRead } from "../interfaces/Crud/ICrud";
import { UserInterface } from "../interfaces/users/UserInterface";

export default class UserModel implements ICrudCreate<NewEntity<UserInterface>>, ICrudRead {
    private model = SequelizeUser;

  async findById(id: number): Promise<UserInterface | null> {
    const user = await this.model.findByPk(id);
    if (!user) return null;
    return user.get();
  }

    async create(user: NewEntity<UserInterface>): Promise<UserInterface | null> {
        const newUser = await this.model.create(user);
        if (!newUser) return null;
        return newUser;
    }
    async findByEmail(email: string): Promise<UserInterface | null> {
        const user = await this.model.findOne({ where: { email } })
        if (!user) return null;
        return user.get();
    }
}