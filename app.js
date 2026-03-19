// 儿童识字小报生成器 - 核心逻辑

// ===== 预设主题标题 =====
const presetTitles = {
    '超市': ['《走进超市》', '《快乐购物》', '《超市小帮手》'],
    '医院': ['《快乐医院》', '《医院小天使》', '《健康小卫士》'],
    '公园': ['《公园日记》', '《户外乐趣》', '《春天来了》'],
    '学校': ['《我的学校》', '《学习真快乐》', '《好朋友》'],
    '餐厅': ['《小小餐厅》', '《美食之旅》', '《厨房小帮手》'],
    '家庭': ['《我的家》', '《温馨家庭》', '《我爱我家》'],
    '图书馆': ['《阅读时光》', '《书香世界》', '《知识海洋》'],
    '游乐场': ['《欢乐天地》', '《快乐一天》', '《刺激冒险》'],
    '动物园': ['《动物朋友》', '《奇妙动物》', '《Safari探险》'],
    '海滩': ['《沙滩派对》', '《夏日海边》', '《海洋世界》'],
    '火车站': ['《火车旅行》', '《小小站长的一天》', '《出发去旅行》'],
    '消防站': ['《消防英雄》', '《英勇消防员》', '《救援行动》'],
    '银行': ['《银行小管家》', '《钱币乐园》', '《储蓄小达人》'],
    '花园': ['《美丽花园》', '《花儿的世界》', '《园丁日记》']
};

// ===== 预设场景词汇库 =====
const sceneVocabulary = {
    // 超市
    '超市': {
        core: [
            'shōu yín yuán 收银员',
            'huò jià 货架',
            'shōu yín tái 收银台',
            'gòu wù chē 购物车',
            'gòu wù lán 购物篮'
        ],
        items: [
            'píng guǒ 苹果',
            'miàn bāo 面包',
            'niú nǎi 牛奶',
            'shuǐ guǒ 水果',
            'shū cài 蔬菜',
            'bīng qí lín 冰淇淋',
            'qiǎo kè lì 巧克力',
            'yǐn liào 饮料'
        ],
        environment: [
            'chū kǒu 出口',
            'rù kǒu 入口',
            'dēng 灯',
            'qiáng 墙',
            'biāo jià 标价'
        ]
    },
    // 医院
    '医院': {
        core: [
            'yī shēng 医生',
            'hù shi 护士',
            'bìng chuáng 病床',
            'tīng zhěn qì 听诊器',
            'yào fáng 药房'
        ],
        items: [
            'tǐ wēn jì 体温计',
            'bēng dài 绷带',
            'yào 药',
            'zhěn duàn shū 诊断书',
            'shuǐ yín 输液',
            'kǒu zhào 口罩',
            'xié xié dài 鞋套'
        ],
        environment: [
            'hào hěn 号码',
            'dēng 灯',
            'qiáng 墙',
            'zuò yi 座椅',
            'zhǐ shì pái 指示牌'
        ]
    },
    // 公园
    '公园': {
        core: [
            'huá tī 滑梯',
            'dàng qiū qiān 荡秋千',
            'shā kēng 沙坑',
            'cháng liàn  长椅',
            ' huā yuán 花园'
        ],
        items: [
            'lì zi 例子',
            'hú dié 蝴蝶',
            'xiǎo niǎo 小鸟',
            'huā 花',
            'cǎo 草',
            'shù 树',
            'páo xiào 泡泡'
        ],
        environment: [
            'lù 路',
            'dēng 灯',
            'qiáo 桥',
            'pēn quán 喷泉',
            'zhǎn lǎn pén 展览盆'
        ]
    },
    // 学校
    '学校': {
        core: [
            'lǎo shī 老师',
            'tóng xué 同学',
            'hēi bǎn 黑板',
            'zhuō zi 桌子',
            'yǐ zi 椅子'
        ],
        items: [
            'shū 包',
            'bǐ 笔',
            'qiān bǐ 铅笔',
            'gāng bǐ 钢笔',
            'cè 策',
            'huà bǎn 画板',
            'qiū qiān 秋千'
        ],
        environment: [
            'jiào shì 教室',
            'cāo chǎng 操场',
            'guó qí 国旗',
            'tú shū guǎn 图书馆',
            'láng 廊'
        ]
    },
    // 餐厅
    '餐厅': {
        core: [
            'chú shī 厨师',
            'fú wù yuán 服务员',
            'cān zhuō 餐桌',
            'cān yǐ 餐椅',
            'zhuō bù 桌布'
        ],
        items: [
            'fàn 饭',
            'cài 菜',
            'tāng 汤',
            'kuài zi 筷子',
            'sháo zi 勺子',
            'wǎn 碗',
            'bēi zi 杯子',
            'zhǐ jīn 纸巾'
        ],
        environment: [
            'dēng 灯',
            'qiáng 墙',
            'huā 花',
            'zhuō 桌',
            'mén 门'
        ]
    },
    // 家庭
    '家庭': {
        core: [
            'bà ba 爸爸',
            'mā ma 妈妈',
            'wǒ 我',
            'shā fā 沙发',
            'diàn shì jī 电视机'
        ],
        items: [
            'chú guì 橱柜',
            'chuáng 床',
            'yī guì 衣柜',
            'shū zhuō 书桌',
            'dēng 灯',
            'huā 盆'
        ],
        environment: [
            'kè tīng 客厅',
            'wò shì 卧室',
            'chú fáng 厨房',
            'wèi shēng jiān 卫生间',
            'mén 门'
        ]
    },
    // 图书馆
    '图书馆': {
        core: [
            'guǎn lǐ yuán 管理员',
            'shū jià 书架',
            'yuè dú qū 阅读区',
            'zhuō zi 桌子',
            'yǐ zi 椅子'
        ],
        items: [
            'shū 书',
            'tú huà shū 图画书',
            'gù shi shū 故事书',
            'kē pǔ shū 科普书',
            'cè 策',
            'fàng dà jìng 放大镜',
            'shū qiān 书签'
        ],
        environment: [
            'dēng 灯',
            'qiáng 墙',
            'dì tú 地图',
            'zhǐ shì pái 指示牌',
            'mén 门'
        ]
    },
    // 游乐场
    '游乐场': {
        core: [
            'guǎn lǐ yuán 管理员',
            'mó tiān lún 摩天轮',
            'guò shān chē 过山车',
            'xuán zhuǎn mù 马旋转木马',
            'huá tī 滑梯'
        ],
        items: [
            'piào 票',
            'bīng qí lín 冰淇淋',
            'xiǎo chī 小吃',
            'qì qiú 气球',
            'wán jù 玩具',
            'zhào piàn 照片'
        ],
        environment: [
            'lù 路',
            'dēng 灯',
            'shù 树',
            'cǎo 坪',
            'fēng jǐng 风景'
        ]
    },
    // 动物园
    '动物园': {
        core: [
            'guǎn lǐ yuán 管理员',
            'shī zi 狮子',
            'dà xiàng 大象',
            'cháng jǐng lù 长颈鹿',
            'hóu zi 猴子'
        ],
        items: [
            'shuǐ guǒ 水果',
            'cǎo 草',
            'yú 鱼',
            'hú luó bo 胡萝卜',
            'miàn bāo 面包',
            'pái zhào 牌照'
        ],
        environment: [
            'lóng zi 笼子',
            'qiáo 桥',
            'shù 树',
            'hú 湖',
            'lù 路'
        ]
    },
    // 海滩
    '海滩': {
        core: [
            'bà ba 爸爸',
            'mā ma 妈妈',
            'wǒ 我',
            'shā tān 海滩',
            'dà hǎi 大海'
        ],
        items: [
            'shā sq 沙',
            'jiàn zi 铲子',
            'shuǐ tǒng 水桶',
            'yóu yǒng quān 游泳圈',
            'tài yáng jìng 太阳镜',
            'mào zi 帽子',
            'jiù shēng quān 救生圈'
        ],
        environment: [
            'tài yáng 太阳',
            'yún 云',
            'shā 沙',
            'hǎi làng 海浪',
            'zhōu 舟'
        ]
    },
    // 火车站
    '火车站': {
        core: [
            'jià yuán 检票员',
            'chē zhǎn 车站',
            'huǒ chē 火车',
            'píng tái 平台',
            'zuò wèi 座位'
        ],
        items: [
            'piào 票',
            'xíng li 行李',
            'shuǐ  水',
            'bào zhǐ 报纸',
            'shí wù 食物',
            'wǎn 碗'
        ],
        environment: [
            'shí zhōng 时钟',
            'dēng 灯',
            'pái 牌',
            'mén 门',
            'chuāng 窗'
        ]
    },
    // 消防站
    '消防站': {
        core: [
            'xiāo fáng yuán 消防员',
            'xiāo fáng chē 消防车',
            'tī zi 梯子',
            'shuǐ dài 水带',
            'jiù hù 救护'
        ],
        items: [
            'mào zi 帽子',
            'fáng hù 防护服',
            'miè huǒ qì 灭火器',
            'shǒu diàn筒 手电',
            'jiù hù xiāng 救护箱',
            'duì jiǎng 机'
        ],
        environment: [
            'dēng 灯',
            'qiáng 墙',
            'mén 门',
            'chē kù 车库',
            'zhǐ shì pái 指示牌'
        ]
    },
    // 银行
    '银行': {
        core: [
            'yín háng gù yuán 银行柜员',
            'qǔ hào jī 取号机',
            'yín háng tái 银行台',
            'bǎo xiǎn xiāng 保险箱',
            'zì dòng qǔ kuǎn jī 自动取款机'
        ],
        items: [
            'qián 钱',
            'zhàng ben 账本',
            'zhèng jiàn 证件',
            'kǎ 卡',
            'bǐ 笔',
            'zhǐ 纸'
        ],
        environment: [
            'dēng 灯',
            'qiáng 墙',
            'zuò yi 座椅',
            'mén 门',
            'bō li 玻璃'
        ]
    },
    // 花园
    '花园': {
        core: [
            'yuán dīng 园丁',
            'huā  花',
            'cǎo 草',
            'shù 树',
            'pēn quán 喷泉'
        ],
        items: [
            'sǎ shuǐ hú 洒水壶',
            'chú tou 锄头',
            'jiǎn dāo 剪刀',
            'bō luó 萝卜',
            'cǎo 莓',
            'hú dié 蝴蝶',
            'mì fēng 蜜蜂'
        ],
        environment: [
            'lù 路',
            'qiáo 桥',
            'dēng 灯',
            'wū 屋',
            'chí 池'
        ]
    }
};

// ===== DOM 元素 =====
const themeInput = document.getElementById('theme');
const titleInput = document.getElementById('title');
const generateBtn = document.getElementById('generateBtn');
const promptOutput = document.getElementById('promptOutput');
const copyBtn = document.getElementById('copyBtn');
const resetBtn = document.getElementById('resetBtn');
const step1 = document.getElementById('step1');
const step2 = document.getElementById('step2');
const step3 = document.getElementById('step3');
const apiKeyInput = document.getElementById('apiKey');
const saveApiKeyBtn = document.getElementById('saveApiKeyBtn');
const presetButtons = document.getElementById('presetButtons');
const aspectRatioSelect = document.getElementById('aspectRatio');
const resolutionSelect = document.getElementById('resolution');
const outputFormatSelect = document.getElementById('outputFormat');
const generateImageBtn = document.getElementById('generateImageBtn');
const imageResult = document.getElementById('imageResult');
const generatedImage = document.getElementById('generatedImage');
const downloadLink = document.getElementById('downloadLink');
const imageStatus = document.getElementById('imageStatus');

// ===== 状态 =====
let currentPrompt = '';

// ===== 初始化 =====
function init() {
    // 加载保存的 API Key
    const savedApiKey = localStorage.getItem('nanoBananaApiKey');
    if (savedApiKey) {
        apiKeyInput.value = savedApiKey;
    }

    // 初始化预设主题按钮
    initPresetButtons();

    // 绑定事件
    generateBtn.addEventListener('click', generatePrompt);
    copyBtn.addEventListener('click', copyPrompt);
    resetBtn.addEventListener('click', resetForm);
    saveApiKeyBtn.addEventListener('click', saveApiKey);
    generateImageBtn.addEventListener('click', generateImage);
}

// ===== 初始化预设按钮 =====
function initPresetButtons() {
    const themes = Object.keys(sceneVocabulary);
    presetButtons.innerHTML = themes.map(theme =>
        `<button type="button" class="preset-btn" data-theme="${theme}">${theme}</button>`
    ).join('');

    // 绑定点击事件
    presetButtons.addEventListener('click', (e) => {
        if (e.target.classList.contains('preset-btn')) {
            const theme = e.target.dataset.theme;

            // 更新选中状态
            document.querySelectorAll('.preset-btn').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            // 填充主题
            themeInput.value = theme;

            // 自动填充推荐标题
            if (presetTitles[theme]) {
                titleInput.value = presetTitles[theme][0];
            }
        }
    });
}

// ===== 生成提示词 =====
function generatePrompt() {
    const theme = themeInput.value.trim();
    const title = titleInput.value.trim();

    if (!theme || !title) {
        alert('请输入主题和标题');
        return;
    }

    // 获取词汇
    const vocab = getVocabulary(theme);

    // 生成提示词
    currentPrompt = buildPrompt(theme, title, vocab);

    // 显示输出
    promptOutput.textContent = currentPrompt;
    step2.classList.remove('hidden');
    step3.classList.remove('hidden');

    // 滚动到输出区域
    step2.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ===== 获取词汇库 =====
function getVocabulary(theme) {
    // 尝试精确匹配
    if (sceneVocabulary[theme]) {
        return sceneVocabulary[theme];
    }

    // 尝试模糊匹配
    const lowerTheme = theme.toLowerCase();
    for (const key of Object.keys(sceneVocabulary)) {
        if (lowerTheme.includes(key) || key.includes(lowerTheme)) {
            return sceneVocabulary[key];
        }
    }

    // 返回默认词汇
    return {
        core: ['wù tǐ 物体', 'rén wù 人物', 'chǎng jǐng 场景'],
        items: ['dōng xi 东西', 'yòng pǐn 用品', 'gōng jù 工具'],
        environment: ['hòu jǐng 背景', 'dēng 灯', 'qiáng 墙']
    };
}

// ===== 构建提示词 =====
function buildPrompt(theme, title, vocab) {
    const coreList = vocab.core.join('\\n');
    const itemsList = vocab.items.join('\\n');
    const envList = vocab.environment.join('\\n');

    return `请生成一张儿童识字小报《${theme}》，竖版 A4，学习小报版式，适合 5–9 岁孩子 认字与看图识物。

# 一、小报标题区（顶部）

**顶部居中大标题**：《${title}》
* **风格**：十字小报 / 儿童学习报感
* **文本要求**：大字、醒目、卡通手写体、彩色描边
* **装饰**：周围添加与 ${theme} 相关的贴纸风装饰，颜色鲜艳

# 二、小报主体（中间主画面）

画面中心是一幅 **卡通插画风的「${theme}」场景**：
* **整体气氛**：明亮、温暖、积极
* **构图**：物体边界清晰，方便对应文字，不要过于拥挤。

**场景分区与核心内容**
1.  **核心区域 A（主要对象）**：表现 ${theme} 的核心活动。
2.  **核心区域 B（配套设施）**：展示相关的工具或物品。
3.  **核心区域 C（环境背景）**：体现环境特征（如墙面、指示牌等）。

**主题人物**
* **角色**：1 位可爱卡通人物（职业/身份：与 ${theme} 匹配）。
* **动作**：正在进行与场景相关的自然互动。

# 三、必画物体与识字清单（Generated Content）

**请务必在画面中清晰绘制以下物体，并为其预留贴标签的位置：**

**1. 核心角色与设施：**
${coreList}

**2. 常见物品/工具：**
${itemsList}

**3. 环境与装饰：**
${envList}

*(注意：画面中的物体数量不限于此，但以上列表必须作为重点描绘对象)*

# 四、识字标注规则

对上述清单中的物体，贴上中文识字标签：
* **格式**：两行制（第一行拼音带声调，第二行简体汉字）。
* **样式**：彩色小贴纸风格，白底黑字或深色字，清晰可读。
* **排版**：标签靠近对应的物体，不遮挡主体。

# 五、画风参数
* **风格**：儿童绘本风 + 识字小报风
* **色彩**：高饱和、明快、温暖 (High Saturation, Warm Tone)
* **质量**：8k resolution, high detail, vector illustration style, clean lines.`;
}

// ===== 复制提示词 =====
function copyPrompt() {
    navigator.clipboard.writeText(currentPrompt).then(() => {
        copyBtn.textContent = '✓ 已复制!';
        setTimeout(() => {
            copyBtn.textContent = '📋 复制提示词';
        }, 2000);
    });
}

// ===== 重置表单 =====
function resetForm() {
    themeInput.value = '';
    titleInput.value = '';
    currentPrompt = '';
    step2.classList.add('hidden');
    step3.classList.add('hidden');
    imageResult.classList.add('hidden');
    imageStatus.classList.add('hidden');
    themeInput.focus();
}

// ===== 保存 API Key =====
function saveApiKey() {
    const apiKey = apiKeyInput.value.trim();
    if (apiKey) {
        localStorage.setItem('nanoBananaApiKey', apiKey);
        alert('API Key 已保存');
    }
}

// ===== 生成图像 =====
async function generateImage() {
    const apiKey = apiKeyInput.value.trim();

    if (!apiKey) {
        alert('请先配置 API Key');
        return;
    }

    if (!currentPrompt) {
        alert('请先生成提示词');
        return;
    }

    // 显示加载状态
    imageStatus.textContent = '正在创建任务...';
    imageStatus.className = 'status loading';
    imageStatus.classList.remove('hidden');
    imageResult.classList.add('hidden');
    generateImageBtn.disabled = true;

    try {
        // 创建任务
        const taskData = {
            model: 'nano-banana-pro',
            input: {
                prompt: currentPrompt,
                image_input: [],
                aspect_ratio: aspectRatioSelect.value,
                resolution: resolutionSelect.value,
                output_format: outputFormatSelect.value
            }
        };

        const createResponse = await fetch('https://api.kie.ai/api/v1/jobs/createTask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify(taskData)
        });

        const createResult = await createResponse.json();

        if (createResult.code !== 200) {
            throw new Error(createResult.msg || '创建任务失败');
        }

        const taskId = createResult.data.taskId;
        imageStatus.textContent = '任务已创建，正在生成图像...';

        // 轮询任务状态
        const imageUrl = await pollTaskStatus(apiKey, taskId);

        // 显示结果
        generatedImage.src = imageUrl;
        // 使用 fetch + blob 方式实现跨域下载
        downloadLink.onclick = () => downloadImage(imageUrl, `kids-word-${Date.now()}.${outputFormatSelect.value}`);
        imageResult.classList.remove('hidden');
        imageStatus.textContent = '图像生成成功！';
        imageStatus.className = 'status success';

    } catch (error) {
        imageStatus.textContent = `错误: ${error.message}`;
        imageStatus.className = 'status error';
    } finally {
        generateImageBtn.disabled = false;
    }
}

// ===== 轮询任务状态 =====
async function pollTaskStatus(apiKey, taskId) {
    const maxAttempts = 60;
    const interval = 2000;

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
        await new Promise(resolve => setTimeout(resolve, interval));

        const response = await fetch(`https://api.kie.ai/api/v1/jobs/recordInfo?taskId=${taskId}`, {
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });

        const result = await response.json();

        if (result.code !== 200) {
            throw new Error(result.msg || '查询任务失败');
        }

        const state = result.data.state;

        if (state === 'success') {
            const resultJson = JSON.parse(result.data.resultJson);
            return resultJson.resultUrls[0];
        } else if (state === 'fail') {
            throw new Error(result.data.failMsg || '图像生成失败');
        } else {
            imageStatus.textContent = `生成中... (${attempt + 1}/${maxAttempts})`;
        }
    }

    throw new Error('生成超时，请重试');
}

// ===== 下载图像 =====
async function downloadImage(url, filename) {
    try {
        const response = await fetch(url);
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = blobUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(blobUrl);
    } catch (error) {
        alert('下载失败: ' + error.message);
    }
}

// ===== 启动 =====
init();
