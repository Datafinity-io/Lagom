const sampleVid = {
  kind: "youtube#video",
  etag: "fd_d19_dzBdwvMh_jkJazhLa4jY",
  id: "yrWItqvW5FE",
  channelHandle: "kingdomsoundworshipministry",
  channelAvatarUrl: "null",
  snippet: {
    publishedAt: "2025-02-24T19:13:23Z",
    channelId: "UCrcs3S0R7C3DHXQzYcXp9Nw",
    title:
      "Lidia Anteneh @ Kingdom Sound Worship Night 2025 ' Moges Yetegebe ' Original Song By Betelhem Tezera",
    description:
      "Lidia Anteneh @ Kingdom Sound Worship Night 2025 ' Moges Yetegebe ' Original Song By Betelhem Tezera  & ' Manew Manew  ' Original Song By Kalkidan Tilahun",
    thumbnails: {
      default: {
        url: "https://i.ytimg.com/vi/yrWItqvW5FE/default.jpg",
        width: 120,
        height: 90,
      },
      medium: {
        url: "https://i.ytimg.com/vi/yrWItqvW5FE/mqdefault.jpg",
        width: 320,
        height: 180,
      },
      high: {
        url: "https://i.ytimg.com/vi/yrWItqvW5FE/hqdefault.jpg",
        width: 480,
        height: 360,
      },
      standard: {
        url: "https://i.ytimg.com/vi/yrWItqvW5FE/sddefault.jpg",
        width: 640,
        height: 480,
      },
    },
    channelTitle: "Kingdom Sound",
    categoryId: "10",
    liveBroadcastContent: "none",
    localized: {
      title:
        "Lidia Anteneh @ Kingdom Sound Worship Night 2025 ' Moges Yetegebe ' Original Song By Betelhem Tezera",
      description:
        "Lidia Anteneh @ Kingdom Sound Worship Night 2025 ' Moges Yetegebe ' Original Song By Betelhem Tezera  & ' Manew Manew  ' Original Song By Kalkidan Tilahun",
    },
  },
  contentDetails: {
    duration: "PT13M1S",
    dimension: "2d",
    definition: "hd",
    caption: "false",
    licensedContent: true,
    contentRating: {},
    projection: "rectangular",
  },
  statistics: {
    viewCount: "81188",
    likeCount: "4938",
    favoriteCount: "0",
    commentCount: "312",
  },
};

function createVideoCard(video) {
  const card = document.createElement("ytd-rich-item-renderer");
  card.className = "style-scope ytd-rich-grid-renderer";
  card.setAttribute("items-per-row", "3");
  card.setAttribute("lockup", "true");
  card.setAttribute("rendered-from-rich-grid", "");
  const {snippet, contentDetails, id, statistics, channelAvatarUrl, channelHandle} = video
  card.innerHTML = `
  <div id="content" class="style-scope ytd-rich-item-renderer">
    <ytd-rich-grid-media
      class="style-scope ytd-rich-item-renderer"
      lockup="true"
    >
      <div id="dismissible" class="style-scope ytd-rich-grid-media">
        <div id="thumbnail" class="style-scope ytd-rich-grid-media">
          <ytd-thumbnail
            rich-grid-thumbnail=""
            use-hovered-property=""
            width="9999"
            class="style-scope ytd-rich-grid-media"
            size="large"
            loaded=""
          >
            <a
              id="thumbnail"
              class="yt-simple-endpoint inline-block style-scope ytd-thumbnail"
              aria-hidden="true"
              tabindex="-1"
              rel="null"
              href="/watch?v=${id}"
            >
              <yt-image
                alt="${snippet.title}"
                ftl-eligible=""
                notify-on-loaded=""
                class="style-scope ytd-thumbnail"
              >
                <img
                  alt="${snippet.title}"
                  class="yt-core-image yt-core-image--fill-parent-height yt-core-image--fill-parent-width yt-core-image--content-mode-scale-aspect-fill yt-core-image--loaded"
                  style="background-color: transparent"
                  src="${snippet.thumbnails.high.url}"
                />
              </yt-image>

              <div id="overlays" class="style-scope ytd-thumbnail">
                <ytd-thumbnail-overlay-time-status-renderer
                  class="style-scope ytd-thumbnail"
                  hide-time-status=""
                  overlay-style="DEFAULT"
                >
                  <ytd-badge-supported-renderer
                    is-thumbnail-badge=""
                    class="style-scope ytd-thumbnail-overlay-time-status-renderer"
                    system-icons=""
                    enable-refresh-web=""
                  >
                    <dom-repeat
                      id="repeat"
                      as="badge"
                      class="style-scope ytd-badge-supported-renderer"
                    >
                      <template is="dom-repeat"></template>
                    </dom-repeat>
                  </ytd-badge-supported-renderer>
                  <div
                    class="thumbnail-overlay-badge-shape style-scope ytd-thumbnail-overlay-time-status-renderer"
                  >
                    <badge-shape
                      class="badge-shape-wiz badge-shape-wiz--thumbnail-default badge-shape-wiz--thumbnail-badge"
                      role="img"
                      aria-label="${"formattedDuration"}"
                    >
                      <div class="badge-shape-wiz__text">
                        ${"formattedDuration"}
                      </div>
                    </badge-shape>
                  </div>
                  <div
                    id="time-status"
                    class="style-scope ytd-thumbnail-overlay-time-status-renderer"
                    hidden=""
                  >
                    <yt-icon
                      size="16"
                      class="style-scope ytd-thumbnail-overlay-time-status-renderer"
                      disable-upgrade=""
                      hidden=""
                    ></yt-icon>
                    <span
                      id="text"
                      class="style-scope ytd-thumbnail-overlay-time-status-renderer"
                      aria-label="${"formattedDuration"}"
                    >
                      ${"formattedDuration"}
                    </span>
                  </div>
                </ytd-thumbnail-overlay-time-status-renderer>

                <ytd-thumbnail-overlay-now-playing-renderer
                  class="style-scope ytd-thumbnail"
                  now-playing-badge=""
                >
                  <span
                    id="overlay-text"
                    class="style-scope ytd-thumbnail-overlay-now-playing-renderer"
                  >
                    Now playing
                  </span>
                  <ytd-thumbnail-overlay-equalizer
                    class="style-scope ytd-thumbnail-overlay-now-playing-renderer"
                    animate-equalizer=""
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="equalizer"
                      viewBox="0 0 55 95"
                      class="style-scope ytd-thumbnail-overlay-equalizer"
                    >
                      <g class="style-scope ytd-thumbnail-overlay-equalizer">
                        <rect
                          class="bar style-scope ytd-thumbnail-overlay-equalizer"
                          x="0"
                        ></rect>
                        <rect
                          class="bar style-scope ytd-thumbnail-overlay-equalizer"
                          x="20"
                        ></rect>
                        <rect
                          class="bar style-scope ytd-thumbnail-overlay-equalizer"
                          x="40"
                        ></rect>
                      </g>
                    </svg>
                  </ytd-thumbnail-overlay-equalizer>
                </ytd-thumbnail-overlay-now-playing-renderer>
              </div>
              <div
                id="mouseover-overlay"
                class="style-scope ytd-thumbnail"
              ></div>
              <div id="hover-overlays" class="style-scope ytd-thumbnail"></div>
            </a>
          </ytd-thumbnail>

          <ytd-playlist-thumbnail
            is-double-stack=""
            use-hovered-property=""
            width="9999"
            class="style-scope ytd-rich-grid-media"
            thumbnail-size="large"
            enable-web-modern-collections-v2=""
            size="large"
            hidden=""
          >
            <yt-collections-stack class="collections-stack-wiz">
              <div>
                <div
                  class="collections-stack-wiz__collection-stack2"
                  style=""
                ></div>
                <div
                  class="collections-stack-wiz__collection-stack1 collections-stack-wiz__collection-stack1--large"
                  style=""
                ></div>
              </div>
            </yt-collections-stack>
            <a
              id="thumbnail"
              class="yt-simple-endpoint style-scope ytd-playlist-thumbnail"
              tabindex="-1"
              aria-hidden="true"
              href="/watch?v=${id}"
            >
              <div
                id="playlist-thumbnails"
                class="style-scope ytd-playlist-thumbnail"
              ></div>
              <yt-formatted-string
                id="length"
                class="style-scope ytd-playlist-thumbnail"
                aria-label="${"formattedDuration"}"
              >
                ${"formattedDuration"}
              </yt-formatted-string>
              <div id="overlays" class="style-scope ytd-playlist-thumbnail">
                <ytd-thumbnail-overlay-time-status-renderer
                  class="style-scope ytd-playlist-thumbnail"
                  hide-time-status=""
                  overlay-style="DEFAULT"
                >
                  <ytd-badge-supported-renderer
                    is-thumbnail-badge=""
                    class="style-scope ytd-thumbnail-overlay-time-status-renderer"
                    system-icons=""
                    enable-refresh-web=""
                  >
                    <dom-repeat
                      id="repeat"
                      as="badge"
                      class="style-scope ytd-badge-supported-renderer"
                    >
                      <template is="dom-repeat"></template>
                    </dom-repeat>
                  </ytd-badge-supported-renderer>
                  <div
                    class="thumbnail-overlay-badge-shape style-scope ytd-thumbnail-overlay-time-status-renderer"
                  >
                    <badge-shape
                      class="badge-shape-wiz badge-shape-wiz--thumbnail-default badge-shape-wiz--thumbnail-badge"
                      role="img"
                      aria-label="${"formattedDuration"}"
                    >
                      <div class="badge-shape-wiz__text">
                        ${"formattedDuration"}
                      </div>
                    </badge-shape>
                  </div>
                  <div
                    id="time-status"
                    class="style-scope ytd-thumbnail-overlay-time-status-renderer"
                    hidden=""
                  >
                    <yt-icon
                      size="16"
                      class="style-scope ytd-thumbnail-overlay-time-status-renderer"
                      disable-upgrade=""
                      hidden=""
                    ></yt-icon>
                    <span
                      id="text"
                      class="style-scope ytd-thumbnail-overlay-time-status-renderer"
                      aria-label="${"formattedDuration"}"
                    >
                      ${"formattedDuration"}
                    </span>
                  </div>
                </ytd-thumbnail-overlay-time-status-renderer>
                <ytd-thumbnail-overlay-now-playing-renderer
                  class="style-scope ytd-playlist-thumbnail"
                  now-playing-badge=""
                >
                  <span
                    id="overlay-text"
                    class="style-scope ytd-thumbnail-overlay-now-playing-renderer"
                  >
                    Now playing
                  </span>
                  <ytd-thumbnail-overlay-equalizer
                    class="style-scope ytd-thumbnail-overlay-now-playing-renderer"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="equalizer"
                      viewBox="0 0 55 95"
                      class="style-scope ytd-thumbnail-overlay-equalizer"
                    >
                      <g class="style-scope ytd-thumbnail-overlay-equalizer">
                        <rect
                          class="bar style-scope ytd-thumbnail-overlay-equalizer"
                          x="0"
                        ></rect>
                        <rect
                          class="bar style-scope ytd-thumbnail-overlay-equalizer"
                          x="20"
                        ></rect>
                        <rect
                          class="bar style-scope ytd-thumbnail-overlay-equalizer"
                          x="40"
                        ></rect>
                      </g>
                    </svg>
                  </ytd-thumbnail-overlay-equalizer>
                </ytd-thumbnail-overlay-now-playing-renderer>
              </div>
              <div
                id="hover-overlays"
                class="style-scope ytd-playlist-thumbnail"
              ></div>
            </a>
          </ytd-playlist-thumbnail>
        </div>
        <div
          id="thumbnail-underlay"
          class="style-scope ytd-rich-grid-media"
          hidden=""
        ></div>
        <div id="details" class="style-scope ytd-rich-grid-media">
          <div
            id="avatar-container"
            class="yt-simple-endpoint style-scope ytd-rich-grid-media"
          >
            <a
              id="avatar-link"
              class="yt-simple-endpoint style-scope ytd-rich-grid-media"
              tabindex="-1"
              title="${snippet.channelTitle}"
              hidden=""
              href="/@${channelHandle}"
            >
              <yt-img-shadow
                id="avatar"
                width="48"
                class="style-scope ytd-rich-grid-media no-transition empty"
                style="background-color: transparent"
              >
                <img
                  id="img"
                  draggable="false"
                  class="style-scope yt-img-shadow"
                  alt="${snippet.channelTitle}"
                  width="48"
                  src="${channelAvatarUrl}"
                />
              </yt-img-shadow>
            </a>
            <div id="decorated-avatar" class="style-scope ytd-rich-grid-media">
              <yt-decorated-avatar-view-model
                class="yt-decorated-avatar-view-model-wiz style-scope ytd-rich-grid-media"
              >
                <yt-avatar-shape>
                  <div
                    class="yt-spec-avatar-shape yt-spec-avatar-shape__button yt-spec-avatar-shape__button--button-medium yt-spec-avatar-shape__button--tappable"
                    aria-label="Tap to watch live"
                    role="button"
                    tabindex="0"
                  >
                    <div
                      class="yt-spec-avatar-shape--live-ring yt-spec-avatar-shape--cairo-refresh"
                    >
                      <div class="yt-spec-avatar-shape--avatar-size-medium">
                        <img
                          alt="${snippet.channelTitle}"
                          class="yt-core-image yt-spec-avatar-shape__image yt-core-image--fill-parent-height yt-core-image--fill-parent-width yt-core-image--content-mode-scale-to-fill yt-core-image--loaded"
                          src="${channelAvatarUrl}"
                        />
                        <div
                          class="yt-spec-avatar-shape__live-badge yt-spec-avatar-shape__live-badge--badge-medium"
                        >
                          <div
                            class="yt-spec-avatar-shape__badge-text"
                            style="visibility: ${"liveStatusVisibility"}"
                          >
                            LIVE
                          </div>
                        </div>
                        <div
                          class="yt-spec-avatar-shape__image-overlays yt-spec-avatar-shape__image"
                        ></div>
                      </div>
                    </div>
                  </div>
                </yt-avatar-shape>
              </yt-decorated-avatar-view-model>
            </div>
          </div>
          <div id="meta" class="style-scope ytd-rich-grid-media">
            <h3 class="style-scope ytd-rich-grid-media">
              <ytd-badge-supported-renderer
                class="top-badge style-scope ytd-rich-grid-media"
                collection-truncate=""
                disable-upgrade=""
                hidden=""
              ></ytd-badge-supported-renderer>
              <a
                id="video-title-link"
                class="yt-simple-endpoint focus-on-expand style-scope ytd-rich-grid-media"
                aria-label="${snippet.title} ${"formattedViewCount"} ${"relativePublishedAt"} ${"formattedDuration"}"
                title="${snippet.title}"
                href="/watch?v=${id}"
              >
                <yt-formatted-string
                  id="video-title"
                  class="style-scope ytd-rich-grid-media"
                >
                  ${snippet.title}
                </yt-formatted-string>
              </a>
            </h3>
            <ytd-video-meta-block
              class="grid style-scope ytd-rich-grid-media byline-separated"
              rich-meta=""
              amsterdam-post-mvp=""
            >
              <div id="metadata" class="style-scope ytd-video-meta-block">
                <div
                  id="byline-container"
                  class="style-scope ytd-video-meta-block"
                >
                  <ytd-channel-name
                    id="channel-name"
                    class="style-scope ytd-video-meta-block style-scope ytd-video-meta-block"
                  >
                    <div id="container" class="style-scope ytd-channel-name">
                      <div
                        id="text-container"
                        class="style-scope ytd-channel-name"
                      >
                        <yt-formatted-string
                          id="text"
                          link-inherit-color=""
                          respect-lang-dir=""
                          title="${snippet.channelTitle}"
                          class="style-scope ytd-channel-name complex-string"
                          ellipsis-truncate=""
                          ellipsis-truncate-styling=""
                          dir="auto"
                          has-link-only_=""
                          style="text-align: left"
                        >
                          <a
                            class="yt-simple-endpoint style-scope yt-formatted-string"
                            spellcheck="false"
                            href="/@${channelHandle}"
                          >
                            ${snippet.channelTitle}
                          </a>
                        </yt-formatted-string>
                      </div>
                      <tp-yt-paper-tooltip
                        fit-to-visible-bounds=""
                        class="style-scope ytd-channel-name"
                        role="tooltip"
                        tabindex="-1"
                        aria-label="tooltip"
                      >
                        <div
                          id="tooltip"
                          class="hidden style-scope tp-yt-paper-tooltip"
                          style-target="tooltip"
                        >
                          ${snippet.channelTitle}
                        </div>
                      </tp-yt-paper-tooltip>
                    </div>
                    <ytd-badge-supported-renderer
                      class="style-scope ytd-channel-name"
                      disable-upgrade=""
                      hidden=""
                    ></ytd-badge-supported-renderer>
                  </ytd-channel-name>
                  <div id="separator" class="style-scope ytd-video-meta-block">
                    •
                  </div>
                  <yt-formatted-string
                    id="video-info"
                    class="style-scope ytd-video-meta-block"
                    hidden=""
                  >
                    <yt-attributed-string
                      class="style-scope yt-formatted-string"
                    ></yt-attributed-string>
                  </yt-formatted-string>
                </div>
                <div
                  id="metadata-line"
                  class="style-scope ytd-video-meta-block"
                >
                  <ytd-badge-supported-renderer
                    class="inline-metadata-badge style-scope ytd-video-meta-block"
                    hidden=""
                    system-icons=""
                    enable-refresh-web=""
                  >
                    <dom-repeat
                      id="repeat"
                      as="badge"
                      class="style-scope ytd-badge-supported-renderer"
                    >
                      <template is="dom-repeat"></template>
                    </dom-repeat>
                  </ytd-badge-supported-renderer>
                  <div
                    id="separator"
                    class="style-scope ytd-video-meta-block"
                    hidden=""
                  >
                    •
                  </div>
                  <span class="inline-metadata-item style-scope ytd-video-meta-block">
                    ${"formattedViewCount"} views
                  </span>
                  <span class="inline-metadata-item style-scope ytd-video-meta-block">
                    ${"relativePublishedAt"}
                  </span>
                  <dom-repeat
                    strip-whitespace=""
                    class="style-scope ytd-video-meta-block"
                  >
                    <template is="dom-repeat"></template>
                  </dom-repeat>
                </div>
              </div>
              <div
                id="additional-metadata-line"
                class="style-scope ytd-video-meta-block"
              >
                <dom-repeat class="style-scope ytd-video-meta-block">
                  <template is="dom-repeat"></template>
                </dom-repeat>
              </div>
            </ytd-video-meta-block>
            <ytd-badge-supported-renderer
              class="video-badge style-scope ytd-rich-grid-media"
              disable-upgrade=""
              hidden=""
            ></ytd-badge-supported-renderer>
            <ytd-badge-supported-renderer
              class="title-badge style-scope ytd-rich-grid-media"
              disable-upgrade=""
              hidden=""
            ></ytd-badge-supported-renderer>
            <yt-formatted-string
              id="view-more"
              link-inherit-color=""
              class="style-scope ytd-rich-grid-media"
              hidden=""
            >
              <yt-attributed-string
                class="style-scope yt-formatted-string"
              ></yt-attributed-string>
            </yt-formatted-string>
            <div id="buttons" class="style-scope ytd-rich-grid-media"></div>
          </div>
          <div id="menu" class="style-scope ytd-rich-grid-media">
            <ytd-menu-renderer
              class="style-scope ytd-rich-grid-media"
              safe-area=""
              menu-active=""
            >
              <div
                id="top-level-buttons-computed"
                class="top-level-buttons style-scope ytd-menu-renderer"
              ></div>
              <div
                id="flexible-item-buttons"
                class="style-scope ytd-menu-renderer"
              ></div>
              <yt-icon-button
                id="button"
                class="dropdown-trigger style-scope ytd-menu-renderer"
                style-target="button"
                role="button"
              >
                <button
                  id="button"
                  class="style-scope yt-icon-button"
                  aria-label="Action menu"
                >
                  <yt-icon class="style-scope ytd-menu-renderer">
                    <span
                      class="yt-icon-shape style-scope yt-icon yt-spec-icon-shape"
                    >
                      <div
                        style="
                          width: 100%;
                          height: 100%;
                          display: block;
                          fill: currentcolor;
                        "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          enable-background="new 0 0 24 24"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          focusable="false"
                          aria-hidden="true"
                          style="
                            pointer-events: none;
                            display: inherit;
                            width: 100%;
                            height: 100%;
                          "
                        >
                          <path
                            d="M12 16.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zM10.5 12c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5zm0-6c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5z"
                          ></path>
                        </svg>
                      </div>
                    </span>
                  </yt-icon>
                </button>
                <yt-interaction
                  id="interaction"
                  class="circular style-scope yt-icon-button"
                >
                  <div class="stroke style-scope yt-interaction"></div>
                  <div class="fill style-scope yt-interaction"></div>
                </yt-interaction>
              </yt-icon-button>
              <yt-button-shape
                id="button-shape"
                class="style-scope ytd-menu-renderer"
                disable-upgrade=""
                hidden=""
              ></yt-button-shape>
            </ytd-menu-renderer>
          </div>
        </div>
        <div id="attached-survey" class="style-scope ytd-rich-grid-media"></div>
      </div>
      <div id="dismissed" class="style-scope ytd-rich-grid-media">
        <div id="dismissed-content" class="style-scope ytd-rich-grid-media"></div>
      </div>
      <yt-interaction
        id="interaction"
        class="extended style-scope ytd-rich-grid-media"
      >
        <div class="stroke style-scope yt-interaction"></div>
        <div class="fill style-scope yt-interaction"></div>
      </yt-interaction>
    </ytd-rich-grid-media>
  </div>
  <yt-interaction
    id="interaction"
    class="extended rounded-large style-scope ytd-rich-item-renderer"
    hidden=""
  >
    <div class="stroke style-scope yt-interaction"></div>
    <div class="fill style-scope yt-interaction"></div>
  </yt-interaction>
  `;

  return card;
}

window.addEventListener("load", function () {
  // Your code here
  console.log("Page fully loaded, including all resources.");
  // Create a MutationObserver to watch for changes in the DOM
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === "childList") {
        const content = document.getElementsByTagName(
          "ytd-rich-item-renderer"
        )[0];
        if (content) {
          console.log(
            "Content found:",
            content.parentNode.prepend(createVideoCard(sampleVid))
          );
          observer.disconnect();
        }
      }
    });
  });

  // Start observing the document body for changes
  observer.observe(document.body, { childList: true, subtree: true });
});
