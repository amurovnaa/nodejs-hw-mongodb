import mongoose from 'mongoose';
import { getEnvVar } from '../utils/getEnvVar.js';
import { ENV_VARS } from '../constants/envVars.js';

export const initMongoConnection = async () => {
  const user = getEnvVar(ENV_VARS.MONGO_DB_USER);
  const pwd = getEnvVar(ENV_VARS.MONGO_DB_PASSWORD);
  const url_host = getEnvVar(ENV_VARS.MONGO_DB_HOST);
  const db = getEnvVar(ENV_VARS.MONGO_DB_DATABASE);

  try {
    await mongoose.connect(
      `mongodb+srv://${user}:${pwd}@${url_host}/${db}?retryWrites=true&w=majority`,
    );
    console.log('Mongo connection successfully established!');
  } catch (e) {
    console.log('Error while setting up mongo connection');
    throw e;
  }
};
