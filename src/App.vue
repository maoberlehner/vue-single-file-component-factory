<template>
  <div
    class="o-container o-container--m o-vertical-spacing o-vertical-spacing--xxl"
    :class="$style.main"
  >
    <h1>
      Vue.js Single File Component Factory
    </h1>

    <LoadArticles @new-entities="articles = $event">
      Load articles
    </LoadArticles>
    <ul
      v-if="articles.length"
      class="o-vertical-spacing"
    >
      <li
        v-for="article in articles"
        :key="article.id"
        class="o-vertical-spacing"
      >
        <h2>{{ article.title }}</h2>
        <p>{{ article.body }}</p>
      </li>
    </ul>

    <hr>

    <LoadComments @new-entities="comments = $event">
      Load comments
    </LoadComments>
    <ul
      v-if="comments.length"
      class="o-vertical-spacing"
    >
      <li
        v-for="comment in comments"
        :key="comment.id"
        class="o-vertical-spacing"
      >
        <h2>{{ comment.title }}</h2>
        <p>{{ comment.body }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import article from './services/article';
import comment from './services/comment';

import { loadEntitiesFactory } from './components/LoadEntities.vue';

export default {
  name: `App`,
  components: {
    LoadArticles: loadEntitiesFactory({
      loadEntities: article.list,
    }),
    LoadComments: loadEntitiesFactory({
      loadEntities: comment.list,
    }),
  },
  data() {
    return {
      articles: [],
      comments: [],
    };
  },
};
</script>

<style lang="scss">
@import './assets/scss/generic/**/*';
@import '{
  .o-container,
  .o-container--m,
} from ~@avalanche/object-container';
@import '{
  .o-vertical-spacing,
  .o-vertical-spacing--xxl,
} from ~@avalanche/object-vertical-spacing';
</style>

<style lang="scss" module>
@import './assets/scss/settings/**/*';

.main {
  padding-top: setting-spacing(xl);
  padding-bottom: setting-spacing(xl);
}
</style>
