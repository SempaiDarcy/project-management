# API Configuration

Этот проект использует @reduxjs/toolkit/query для эффективной обработки API-запросов.

### Базовая Настройка

Базовая настройка API осуществляется с помощью createApi, 
а базовый URL извлекается из переменных окружения. 
Вот базовая конфигурация, расположенная в state/api.ts:

```typescript
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
  }),
  reducerPath: 'api',
  tagTypes: [],
  endpoints: (build) => ({}),
});

export const {} = api;
