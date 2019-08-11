export default {
  list() {
    return Promise.resolve([
      {
        id: `article-1`,
        title: `Lorem ipsum dolor`,
        body: `At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.`,
      },
      {
        id: `article-2`,
        title: `Consetetur sadipscing`,
        body: `Et justo at vero eos et accusam duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor amet sit.`,
      },
      {
        id: `article-3`,
        title: `Et ea rebum`,
        body: `Accusam at vero eos et et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.`,
      },
    ]);
  },
};
