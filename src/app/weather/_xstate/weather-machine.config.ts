import { MachineConfig } from 'xstate';
import { WeatherContext, WeatherSchema } from "./weather-machine.shema";
import { WeatherEvent } from "./weather-machine.events";

export const weatherMachineConfig: MachineConfig<
  WeatherContext,
  WeatherSchema,
  WeatherEvent
> = {
  id: 'weather',
  initial: 'init',
  predictableActionArguments: true,
  context: {
    location: '',
    dataDaily: [],
    dataHourly: [],
    errors: {},
  },
  states: {
    init: {
      always: 'loading'
    },
    loading: {
      invoke: {
        id: 'getDataId',
        src: 'getData',
      },
      on: {
        SUCCESS: {
          target: 'success',
          actions: ['setData']
        },
        FAILURE: {
          target: 'failure',
          actions: ['setErrors']
        }
      }
    },
    success: {},
    failure: {
      on: {
        RETRY: {
          target: 'loading',
        }
      }
    }
  }
};
