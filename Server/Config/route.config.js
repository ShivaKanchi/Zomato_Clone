import Jwtpassport from 'passport-jwt';
import { UserModel } from '../database/allModels';

const JWTStrategy = Jwtpassport.Strategy;
const ExtractJwt = Jwtpassport.ExtractJwt;
