const template = {
  root: "root",
  module: {
    root: {
      uid: "root",
      parent_uid: null,
      label: "页面基础配置",
      children: [
        {
          label: "页头模块",
          value: "header"
        },
        {
          label: "内容模块1",
          value: "article_1"
        },
        {
          label: "内容模块2",
          value: "article_2"
        }
      ],
      options: {
        // name: {
        //   label: "标题",
        //   value: "",
        //   type: "input",
        //   default: "My world",
        //   placeholder: "",
        //   required: false
        // },
        backgroundColor: {
          label: "背景色",
          value: "#000",
          type: "color",
          default: "#fff",
          placeholder: "缺省值为#FFFFFF",
          required: false
        },
        textAlign: {
          label: "文本对齐方式",
          value: "center",
          type: "radio",
          default: "center",
          options: [
            {
              label: "left",
              value: "left"
            },
            {
              label: "center",
              value: "center"
            },
            {
              label: "right",
              value: "right"
            }
          ],
          required: false
        },
        fontSize: {
          label: "字体大小",
          value: "",
          type: "input",
          default: "center",
          placeholder: "缺省值为14px",
          required: false
        },
        color: {
          label: "字体颜色",
          value: "#FFFFFF",
          type: "color",
          default: "center",
          placeholder: "缺省值为#000000",
          required: false
        }
        // children: {
        //   label: "子模块",
        //   required: false,
        //   protect: true,
        //   value: ["article_1"]
        // }
      }
    },
    header: {
      uid: "header",
      parent_uid: "root",
      label: "页头模块",
      children: [
        {
          label: "页头模块-图片",
          value: "header_image"
        },
        {
          label: "页头模块-标题",
          value: "header_title"
        },
        {
          label: "页头模块-副标题",
          value: "header_subtitle"
        },
        {
          label: "页头模块-副标题",
          value: "header_content"
        }
      ],
      options: {
        textAlign: {
          label: "文本对齐方式",
          value: "center",
          type: "radio",
          default: "center",
          options: [
            {
              label: "left",
              value: "left"
            },
            {
              label: "center",
              value: "center"
            },
            {
              label: "right",
              value: "right"
            }
          ],
          required: false
        },
        backgroundColor: {
          label: "背景色",
          value: "#000000",
          type: "color",
          default: "#FFFFFF",
          placeholder: "缺省值为#FFFFFF",
          required: false
        }
      }
    },
    article_1: {
      uid: "article_1",
      parent_uid: "root",
      label: "内容模块1",
      children: [
        {
          label: "内容模块1-图片",
          value: "article_1_image"
        },
        {
          label: "内容模块1-标题",
          value: "article_1_title"
        },
        {
          label: "内容模块1-副标题",
          value: "article_1_subtitle"
        },
        {
          label: "内容模块1-副标题",
          value: "article_1_content"
        }
      ],
      options: {
        textAlign: {
          label: "文本对齐方式",
          value: "center",
          type: "radio",
          default: "center",
          options: [
            {
              label: "left",
              value: "left"
            },
            {
              label: "center",
              value: "center"
            },
            {
              label: "right",
              value: "right"
            }
          ],
          required: false
        },
        backgroundColor: {
          label: "背景色",
          value: "#86E8AF",
          type: "color",
          default: "#FFFFFF",
          placeholder: "缺省值为#FFFFFF",
          required: false
        }
      }
    },
    article_2: {
      uid: "article_2",
      parent_uid: "root",
      label: "内容模块2",
      children: [
        {
          label: "内容模块2-图片",
          value: "article_2_image"
        },
        {
          label: "内容模块2-标题",
          value: "article_2_title"
        },
        {
          label: "内容模块2-副标题",
          value: "article_2_subtitle"
        },
        {
          label: "内容模块2-文本",
          value: "article_2_content"
        }
      ],
      options: {
        textAlign: {
          label: "文本对齐方式",
          value: "center",
          type: "radio",
          default: "center",
          options: [
            {
              label: "left",
              value: "left"
            },
            {
              label: "center",
              value: "center"
            },
            {
              label: "right",
              value: "right"
            }
          ],
          required: false
        },
        backgroundColor: {
          label: "背景色",
          value: "",
          type: "color",
          default: "",
          placeholder: "缺省值为无",
          required: false
        }
      }
    },
    header_image: {
      uid: "header_image",
      parent_uid: "header",
      label: "页头模块-图片",
      children: [],
      options: {
        show: {
          label: "是否可见",
          value: true,
          type: "radio",
          options: [
            {
              label: "显示",
              value: true
            },
            {
              label: "隐藏",
              value: false
            }
          ],
          default: false,
          placeholder: "",
          required: false
        },
        src: {
          label: "图片地址",
          type: "input",
          value: "http://qiniu-store.adonging.com/Fpym6HzJ5oORVJksC4CFXso0vvb7",
          required: false
        }
      }
    },
    header_title: {
      uid: "header_title",
      parent_uid: "header",
      label: "页头模块-标题",
      children: [],
      options: {
        show: {
          label: "是否可见",
          value: true,
          type: "radio",
          options: [
            {
              label: "显示",
              value: true
            },
            {
              label: "隐藏",
              value: false
            }
          ],
          default: false,
          placeholder: "",
          required: false
        },
        value: {
          label: "内容",
          value: "DREAMER",
          type: "input",
          default: "Title",
          placeholder: "缺省值为Title",
          required: false
        }
      }
    },
    header_subtitle: {
      uid: "header_subtitle",
      parent_uid: "header",
      label: "页头模块-副标题",
      children: [],
      options: {
        show: {
          label: "是否可见",
          value: true,
          type: "radio",
          options: [
            {
              label: "显示",
              value: true
            },
            {
              label: "隐藏",
              value: false
            }
          ],
          default: false,
          placeholder: "",
          required: false
        },
        value: {
          label: "内容",
          value: "HERE I AM",
          type: "input",
          default: "Subtitle",
          placeholder: "缺省值为Subtitle",
          required: false
        }
      }
    },
    header_content: {
      uid: "header_content",
      parent_uid: "header",
      label: "页头模块-文章",
      children: [],
      options: {
        show: {
          label: "是否可见",
          value: false,
          type: "radio",
          options: [
            {
              label: "显示",
              value: true
            },
            {
              label: "隐藏",
              value: false
            }
          ],
          default: false,
          placeholder: "",
          required: false
        },
        value: {
          label: "内容",
          value: "",
          type: "input",
          default: "Content",
          placeholder: "缺省值为Content",
          required: false
        }
      }
    },
    article_1_image: {
      uid: "article_1_image",
      parent_uid: "article_1",
      label: "内容模块1-图片",
      children: [],
      options: {
        show: {
          label: "是否可见",
          value: true,
          type: "radio",
          options: [
            {
              label: "显示",
              value: true
            },
            {
              label: "隐藏",
              value: false
            }
          ],
          default: false,
          placeholder: "",
          required: false
        },
        src: {
          label: "图片地址",
          type: "input",
          value: "http://qiniu-store.adonging.com/Fpym6HzJ5oORVJksC4CFXso0vvb7",
          required: false
        }
      }
    },
    article_1_title: {
      uid: "article_1_title",
      parent_uid: "article_1",
      label: "内容模块1-标题",
      children: [],
      options: {
        show: {
          label: "是否可见",
          value: true,
          type: "radio",
          options: [
            {
              label: "显示",
              value: true
            },
            {
              label: "隐藏",
              value: false
            }
          ],
          default: false,
          placeholder: "",
          required: false
        },
        value: {
          label: "内容",
          value: "GETTING STARTEDWWW",
          type: "input",
          default: "Title",
          placeholder: "缺省值为Title",
          required: false
        }
      }
    },
    article_1_subtitle: {
      uid: "article_1_subtitle",
      parent_uid: "article_1",
      label: "内容模块1-副标题",
      children: [],
      options: {
        show: {
          label: "是否可见",
          value: true,
          type: "radio",
          options: [
            {
              label: "显示",
              value: true
            },
            {
              label: "隐藏",
              value: false
            }
          ],
          default: false,
          placeholder: "",
          required: false
        },
        value: {
          label: "内容",
          value: "The Roots",
          type: "input",
          default: "Subtitle",
          placeholder: "缺省值为Subtitle",
          required: false
        }
      }
    },
    article_1_content: {
      uid: "article_1_content",
      parent_uid: "article_1",
      label: "内容模块1-文章",
      children: [],
      options: {
        show: {
          label: "是否可见",
          value: true,
          type: "radio",
          options: [
            {
              label: "显示",
              value: true
            },
            {
              label: "隐藏",
              value: false
            }
          ],
          default: false,
          placeholder: "",
          required: false
        },
        value: {
          label: "内容",
          value:
            "For years, I have served as a useful source to those seeking inspiration, help, or advice. In 2000, I finally decided to own that role and be intentional about it. I started writing about my passions, my thoughts, and curious wonderings about our society. I founded dreamer with a mission to give others a taste of what goes on in my mind, and it has been a wild success ever since.",
          type: "input",
          default: "Content",
          placeholder: "缺省值为Content",
          required: false
        }
      }
    },
    article_2_image: {
      uid: "article_2_image",
      parent_uid: "article_2",
      label: "内容模块2-图片",
      children: [],
      options: {
        show: {
          label: "是否可见",
          value: true,
          type: "radio",
          options: [
            {
              label: "显示",
              value: true
            },
            {
              label: "隐藏",
              value: false
            }
          ],
          default: false,
          placeholder: "",
          required: false
        },
        src: {
          label: "图片地址",
          type: "input",
          value: "http://qiniu-store.adonging.com/Fpym6HzJ5oORVJksC4CFXso0vvb7",
          required: false
        }
      }
    },
    article_2_title: {
      uid: "article_2_title",
      parent_uid: "article_2",
      label: "内容模块2-标题",
      children: [],
      options: {
        show: {
          label: "是否可见",
          value: true,
          type: "radio",
          options: [
            {
              label: "显示",
              value: true
            },
            {
              label: "隐藏",
              value: false
            }
          ],
          default: false,
          placeholder: "",
          required: false
        },
        value: {
          label: "内容",
          value: "Your Go-To Source",
          type: "input",
          default: "Title",
          placeholder: "缺省值为Title",
          required: false
        }
      }
    },
    article_2_subtitle: {
      uid: "article_2_subtitle",
      parent_uid: "article_2",
      label: "内容模块2-副标题",
      children: [],
      options: {
        show: {
          label: "是否可见",
          value: true,
          type: "radio",
          options: [
            {
              label: "显示",
              value: true
            },
            {
              label: "隐藏",
              value: false
            }
          ],
          default: false,
          placeholder: "",
          required: false
        },
        value: {
          label: "内容",
          value: "DREAMER",
          type: "input",
          default: "Subtitle",
          placeholder: "缺省值为Subtitle",
          required: false
        }
      }
    },
    article_2_content: {
      uid: "article_2_content",
      parent_uid: "article_2",
      label: "内容模块2-文章",
      children: [],
      options: {
        show: {
          label: "是否可见",
          value: false,
          type: "radio",
          options: [
            {
              label: "显示",
              value: true
            },
            {
              label: "隐藏",
              value: false
            }
          ],
          default: false,
          placeholder: "",
          required: false
        },
        value: {
          label: "内容",
          value: "",
          type: "input",
          default: "Content",
          placeholder: "缺省值为Content",
          required: false
        }
      }
    }
  }
};

export default template;
