/* - пример использования методов с generic type <T>
  -  запрос на получение информации о туре
 */

const ticketsMock = [
  {
    id: "2-4",
    description: "Подробная информация о туре",
    name: "Тур по выбранному направлению",
    price: "50000",
    tourOperator: "World Travel",
    location: {
      x: "30.4044",
      y: "70.45",
    },
    hotel: "Sun Hotel",
    vipNumber: 1,
    vipStatus: "VIP",
  },
];

export function getTicketById<T extends { id: string }>(
  id: string,
): Promise<T[]> {
  const result = ticketsMock.filter((ticket) => ticket.id === id);

  return Promise.resolve(result as unknown as T[]);
}

// запрос на на отправку данных - пока не используется

export function postTicketData(postData): Promise<{ success: boolean }> {
  return fetch("https://62b9e756ff109cd1dc9dae16.mockapi.io/api/v1/ticket")
    .then((response) => response.json())
    .then((data: { success: boolean }) => {
      return data;
    });
}
