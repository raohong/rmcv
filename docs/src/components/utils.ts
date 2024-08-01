export const BACK_EVENT = 'back';
export const ROUTE_CHANGE_EVENT = 'back';

export const parseMessageEvent = (
  evt: MessageEvent,
): null | {
  event: string;
  data: string;
} => {
  const message = evt.data;

  if (!message) {
    return null;
  }

  try {
    const data = JSON.parse(message);

    if (!data.event) {
      return null;
    }

    return {
      event: data.event,
      data: data.data || null,
    };
  }
  catch {
    return null;
  }
};
