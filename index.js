const { Client, Intents, MessageEmbed, MessageButton, MessageActionRow, Modal, TextInputComponent, MessageSelectMenu } = require('discord.js');
const fs = require('fs');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

//__________________________________________________________________________//
const token = "MTI4MDg4MjA2MDI1MjI4NzAwNg.G_Y9hd.-UVeRmz5vguZEy6GwbAdv_E0K1vPOWCZW3ipYg";//حط توكن بوتك هنا
const price = "10";//سعر بيع تلفيل بدون تاكس
const owner = "1253061154834481244";//أيدي أونر البوت
const recipientid = "1253061154834481244";//أيدي ألي يتحولوا الكريدت
const probotid = "282859044593598464";//أيدي بروبوت
const category = "1258490738401087569";//أيدي الكاتوجوري ألي ينصنع فيها التكتات
const feedback = "1258490831778877582";//أيدي روم الأراء
//__________________________________________________________________________//

const messages = [
    "مرحبًا بالعالم!",
    "الحياة جميلة.",
    "تحية طيبة للجميع.",
    "العمل الجاد يؤدي إلى النجاح.",
    "كل يوم هو بداية جديدة.",
    "الصبر مفتاح الفرج.",
    "العلم نور.",
    "الصداقة كنز لا يفنى.",
    "الأمل هو دافع الحياة.",
    "العقل السليم في الجسم السليم.",
    "التفاؤل هو المفتاح لبداية جيدة.",
    "التعلم متعة لا تنتهي.",
    "كل يوم هو يوم لبداية شيء جديد.",
    "السعادة تكمن في القلب.",
    "الاستمرارية هي سر النجاح.",
    "ابتسامتك تجعل العالم أفضل مكان.",
    "العمل الجماعي يحقق الإنجازات العظيمة.",
    "كن صديقًا للجميع وستجد الصداقة تعود إليك.",
    "تحدي نفسك وابحث دائمًا عن التحسين.",
    "الصدق هو أساس كل علاقة قوية.",
    "الابتسامة تفتح الأبواب.",
    "الإيمان بالنفس يقود إلى النجاح.",
    "العمل الجاد لا يضيع أبدًا.",
    "التواضع طريقك إلى قلوب الناس.",
    "التفكير الإيجابي يغير حياتك.",
    "كن كالشمس تشرق للجميع دون تمييز.",
    "اعمل بصمت، دع نجاحك يصدر عنك الضجيج.",
    "كل شيء ممكن لمن يصدق.",
    "لا تيأس أبدًا، فالفجر قريب.",
    "التغيير يبدأ من داخلك.",
    "لا تنتظر الفرصة، اصنعها.",
    "لا تدع الأمس يأخذ مكان اليوم.",
    "العقل الهادئ هو الأقوى.",
    "استمتع باللحظة، فهي لن تعود مرة أخرى.",
    "العمل الصالح يثمر دائمًا.",
    "الأحلام ليست بالأمور البعيدة المستحيلة.",
    "كل إنجاز يبدأ بخطوة صغيرة.",
    "تعلم من أخطائك ولا تكررها.",
    "الصبر مفتاح الفلاح.",
    "العقل الواعي هو سلاحك الأقوى.",

    "الإيمان بالله يجعل الحياة أفضل.",

    "ابتسامتك تفتح لك الأبواب.",

    "استمع قبل أن تحكم.",

    "النجاح يبدأ من داخلك.",

    "الابتسامة لغة لا تحتاج إلى ترجمة.",

    "العمل الجاد هو الطريق إلى النجاح.",

    "لا تفقد الأمل، فالحياة دائمًا مليئة بالفرص.",

    "التعاون يجعل العمل أسهل.",

    "العطاء يزيد الثراء الروحي.",

    "كن دائمًا على قلب رحب.",

    "كن كالنجم الذي يضيء للآخرين الطريق.",

    "اعمل بجد ولا تحدث عن خططك.",

    "الإيمان بالله يجعل المستحيل ممكنًا.",

    "استمتع باللحظة الحالية، فهي لن تتكرر.",

    "كن كالماء الذي يتأقلم مع أي موقف.",

    "احترم نفسك لتحترم الآخرين.",

    "التواضع هو سر العظمة.",

    "كن صبورًا وتوكل على الله.",

    "ابتسم للحياة وستبتسم لك الحياة.",

    "العقل السليم في الجسم السليم.",

    "كن شجاعًا واستعد لمواجهة التحديات.",

    "الاعتماد على الذات يبني الشخصية القوية.",

    "تعلم من أخطائك ولا تكررها.",

    "النجاح لا يأتي إلا للذين يسعون إليه.",

    "اعمل بجد واصنع فرصك بنفسك.",

    "الثقة بالنفس هي أساس النجاح.",

    "كن صبورًا وثابتًا في تحقيق أحلامك.",

    "اعمل بجد وتوكل على الله في كل شيء تفعله.",

    "ابتسم واجعل العالم يبتسم لك.",

    "كن مبتكرًا ولا تخشى التجديد.",

    "التغيير يبدأ من داخلك، فكن محفزًا للتغيير.",

    "كن شخصًا إيجابيًا وتأكد ستجد الحلول.",

    "التحديات تجعلنا أقوى وأكثر حكمة.",

    "العمل الجاد يؤدي إلى النجاح الكبير.",

    "كن مثابرًا واصبر، فالنجاح قادم بإذن الله.",

    "العطاء يجلب السعادة الحقيقية.",

    "تحدى نفسك دائمًا لتحقيق أكبر إنجازاتك.",

    "التفاؤل هو سر الحياة السعيدة.",

    "ابحث عن الجمال في كل شيء من حولك.",

    "كن مميزًا وابتكر دائمًا.",

    "اجعل الابتسامة عادتك اليومية.",

    "ابتسم وتوكل على الله، فالله لن يضيعك.",

    "تحدى الصعاب ولا تستسلم لها.",

    "التفكير الإيجابي يغير حياتك للأفضل.",
"استمتع باللعب وتحدي نفسك!",

    "اللعبة لحظة للمتعة والتسلية، استمتع بها.",

    "الصبر مفتاح الفوز في الألعاب.",

    "استمتع بالتحديات وكن جريئًا في اللعب.",

    "اللعبة فرصة لتطوير مهاراتك وتنمية قدراتك.",

    "ابتسم والعب بقلب مفتوح، الفوز ليس هو الهدف الوحيد.",

    "تعلم من خسارتك واستعد للمرة القادمة.",

    "كن رياضيًا واحترم خصمك في اللعب.",

    "اللعبة متعة تستحق الاستمتاع بها مع الآخرين.",

    "النجاح في اللعب يأتي لمن يتعلم من أخطائه.",

    "كن دائمًا على استعداد للتحدي الجديد في اللعب.",

    "التعاون في اللعب يجعل الفريق أقوى وأكثر فعالية.",

    "المنافسة الشريفة هي جوهر اللعب الرياضي.",

    "اللعبة لحظة للتسلية والترويح عن النفس، استمتع بها بكل ما فيها.",

    "كن دقيقًا ورشيقًا في اللعب لتحقيق الفوز.",

    "استغل كل لحظة في اللعب واجعلها ممتعة ومفيدة.",

    "احترم قواعد اللعب وتعامل مع الآخرين بأخلاقية.",

    "استمتع بلحظة الانتصار وتذكر دائمًا الجهد الذي بذلته للوصول إليه.",

    "اللعب يساعد على تنمية مهاراتك الذهنية والجسدية.",

    "ابقَ هادئًا ومتركزًا في اللعب للتفوق.",
    "ما هو الشيء الذي يكون أسود وأبيض وأحمر الوانه؟",
    "ما هو الشيء الذي يتكلم جميع اللغات ولا يستطيع الإجابة على أي سؤال؟",
    "ما هو الشيء الذي يقفز في الماء ولا يمشي على الأرض؟",
    "ما هو الشيء الذي يمشي ولا يمشي؟",
    "ما هو الشيء الذي إذا نطقت به انقطعت؟",
    "ما هو الشيء الذي إذا غليته برد، وإذا جمدته حرق؟",
    "ما هو الشيء الذي يأكل ويشرب ولا يحفر؟",
    "ما هو الشيء الذي يكون في البداية كلمة وفي النهاية جملة؟",
    "ما هو الشيء الذي يُلبس لكن لا يُشترى؟",
    "ما هو الشيء الذي يمشي بالساعات ويجيء بالدقائق؟",
    "ما هو الشيء الذي يكون في البداية مرآة وفي النهاية باب؟",
    "ما هو الشيء الذي إذا أكلته ازداد وزنًا؟",
    "ما هو الشيء الذي إذا سقطت عليه ابتسم؟",
    "ما هو الشيء الذي يوجد في البحر ولا يمكن سباحته؟",
    "ما هو الشيء الذي يُحبس البشر ولا يُعيدهم؟",
    "ما هو الشيء الذي ينام ولا يستطيع الاستيقاظ؟",
    "ما هو الشيء الذي يوجد في السماء وفي الأرض ولا يراه البشر؟",
    "ما هو الشيء الذي يبقى وراءك ويسبقك؟",
    "ما هو الشيء الذي إذا أخذت منه تزيد؟",
    "ما هو الشيء الذي يمشي ولا يستطيع الوقوف؟",
    "ما هو الشيء الذي يجري ولا يمشي؟",
    "ما هو الشيء الذي يعيش بدون هواء؟",
    "ما هو الشيء الذي يمشي بالرأس ويأتي بالقدمين؟",
    "ما هو الشيء الذي يُدفن وينبت؟",
    "ما هو الشيء الذي يعيش بدون طعام ولا يموت؟",
    "ما هو الشيء الذي يأكل بلا فم ويتكلم بلا لسان؟",
    "ما هو الشيء الذي يوجد في البحر ولا يستطيع السباحة؟",
    "ما هو الشيء الذي يرى بدون عيون؟",
    "ما هو الشيء الذي يحمل دائمًا ولا يسأل عنه؟",
    "ما هو الشيء الذي يجوز ولا ينفق؟",
    "ما هو الشيء الذي يبكي بدون عينين؟",
    "ما هو الشيء الذي يموت إذا أطعمته؟",
    "ما هو الشيء الذي يبقى إذا ذهبت إليه؟",
    "ما هو الشيء الذي يشترى لكن لا يباع؟",
    "ما هو الشيء الذي يكون في البداية قلم وفي النهاية مسطرة؟",
    "ما هو الشيء الذي يكون في البداية عظم وفي النهاية ضرس؟",
    "ما هو الشيء الذي يكون في البداية حديد وفي النهاية زفير؟",
    "ما هو الشيء الذي يكون في البداية طويل وفي النهاية قصير؟",
    "ما هو الشيء الذي ينمو بدون أرض؟",
    "ما هو الشيء الذي يتكلم ولا يفهم؟",
    "ما هو الشيء الذي يكون في البداية بيت وفي النهاية رقعة؟",
    "ما هو الشيء الذي يكون في البداية حبة وفي النهاية قلب؟",
    "ما هو الشيء الذي يحفظ ولا يباع؟",
    "ما هو الشيء الذي يكون في البداية باب وفي النهاية بركة؟",
    "ما هو الشيء الذي يجري ولا يمشي؟",
    "ما هو الشيء الذي يسمع بلا آذان ويتكلم بلا لسان؟",
    "ما هو الشيء الذي يجب إلقاؤه للحفاظ عليه؟",
    "ما هو الشيء الذي يكون في البداية دموع وفي النهاية جمر؟",
    "ما هو الشيء الذي يكون في البداية عكس وفي النهاية سعادة؟",
    "ما هو الشيء الذي يكون في البداية بني وفي النهاية مقص؟",
    "ما هو الشيء الذي يكون في البداية جبن وفي النهاية قوة؟",
    "ما هو الشيء الذي يكون في البداية خليط وفي النهاية عطر؟",
    "ما هو الشيء الذي يكون في البداية قبلة وفي النهاية ملتقى؟",
    "ما هو الشيء الذي يحفظ في الجيب ولا يحتفظ به بشدة؟",
    "ما هو الشيء الذي يتكلم دون لسان؟",
    "ما هو الشيء الذي إذا أخذت منه زاد؟",
    "ما هو الشيء الذي يجوب السماء والأرض ولا يراه البشر؟",
    "ما هو الشيء الذي يمشي على الأرض ولا يمشي بالسماء؟",
    "ما هو الشيء الذي إذا أكلته أكلك؟"
];

async function sendMessage(accToken, channelId) {
    const { Client } = require('discord.js-selfbot-v13');
    const client2 = new Client();
    try {
        await client2.login(accToken);
        const channel = await client2.channels.fetch(channelId);
        if (channel && channel.isText()) {
            const randomMessage = messages[Math.floor(Math.random() * messages.length)];
            await channel.send(randomMessage);
        }
    } catch (error) {
        if (error.message.includes('TOKEN_INVALID')) {
            console.error(`Token "${accToken}" is invalid`);
        } else if (error.message.includes('channel_id')) {
            console.error(`Channel "${channelId}" not found`);
        } else {
            console.error('Error sending message', error);
        }
    } finally {
        await client2.destroy();
    }
}


client.once('ready', async () => {
    const activityType = 'PLAYING';
    console.log(`Bot Started With Name ${client.user.tag}.`);

    client.user.setPresence({
        activities: [{ name: "lvl", type: activityType }],
        status: 'idle'
    });


    let acc = []; 
    try {
        const data = fs.readFileSync('data.json', 'utf8');
        if (data) {
            acc = JSON.parse(data);
            if (!Array.isArray(acc)) {
                console.error("ERROR");
                acc = [];
            }
        }
    } catch (error) {
        console.error("ERROR", error);
    }

    setInterval(() => {
        acc.forEach(acc => {
            sendMessage(acc.accToken, acc.channelId);
        });
    }, Math.floor(Math.random() * (30000 - 10000 + 1)) + 10000); 
});




let ticketCount = 0;



client.on('messageCreate', async message => {
    
    if (message.content.startsWith('+panel')) {
        const panelEmbed = new MessageEmbed()
            .setTitle('**شراء تلفيل كتابي 🏅**')
            .setDescription('**لرفع لفلك في بروبوت أضغط زر __شراء تلفيل 🏅__**')
            .setColor('#0099ff');

        const actionRow = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('open')
                    .setLabel('شراء تلفيل 🏅')
                    .setStyle('SECONDARY')
            );

        await message.channel.send({ embeds: [panelEmbed], components: [actionRow] });
    }
});

client.on('interactionCreate', async interaction => {
    if (!interaction.isButton()) return;

    if (interaction.customId === 'open') {
        const guild = interaction.guild;
        const ticketName = `ticket-${++ticketCount}`;

        guild.channels.create(ticketName, {
            type: 'text',
            parent: category,
            permissionOverwrites: [
                {
                    id: interaction.user.id,
                    allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY']
                },
                {
                    id: guild.roles.everyone,
                    deny: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'READ_MESSAGE_HISTORY']
                }
            ]
        }).then(async ticketChannel => {
            await interaction.reply({ content: `**تم فتح تكت شراء تلفيل بنجاح :white_check_mark: <#${ticketChannel.id}>**`, ephemeral: true });

            const embed = new MessageEmbed()
                .setTitle('**شراء تلفيل كتابي 🏅**')
                .setDescription('**لشراء تلفيل كتابي لحسابك قم بالضغط على زر __شراء__ في أسفل هذه الرسالة لإكمال عملية الشراء**')
                .setColor('#0099ff');

            const buybutton = new MessageButton()
                .setCustomId('buy')
                .setLabel('شراء')
                .setStyle('SUCCESS');
            
            const closebutton = new MessageButton()
                .setCustomId('close')
                .setLabel('قفل')
                .setStyle('DANGER');

            const actionrow = new MessageActionRow()
                .addComponents(buybutton, closebutton);

            await ticketChannel.send({ embeds: [embed], components: [actionrow] });
        });
    }
});

 


             

client.on('channelCreate', async channel => {
    if (channel.type !== 'GUILD_TEXT' || channel.parentId !== category) return;  

});

client.on('interactionCreate', async interaction => {
    if (!interaction.isButton()) return;

    if (interaction.customId === 'buy') { // Changed custom ID to match the one in the button
        const modal = new Modal()
            .setCustomId('model')
            .setTitle('رفع لفل بروبوت');

        const acctokenInput = new TextInputComponent()
            .setCustomId('accToken')
            .setLabel('توكن حسابك')
            .setStyle('SHORT');

        const channelIdInput = new TextInputComponent()
            .setCustomId('channelId')
            .setLabel('أيدي الروم')
            .setStyle('SHORT');

        const firstActionRow = new MessageActionRow().addComponents(acctokenInput);
        const secondActionRow = new MessageActionRow().addComponents(channelIdInput);

        modal.addComponents(firstActionRow, secondActionRow);

        await interaction.showModal(modal);
    }
});


client.on('interactionCreate', async interaction => {
    if (!interaction.isModalSubmit()) return;

    if (interaction.customId === 'model') {
        const accToken = interaction.fields.getTextInputValue('accToken');
        const channelId = interaction.fields.getTextInputValue('channelId');

        if (!accToken || !channelId) {
            await interaction.reply('الرجاء وضع توكن الحساب و أيدي الروم');
            return;
        }
const confirmationEmbed = new MessageEmbed()
            .setTitle('**الرجاء قراءة هذه الرسالة بعناية**')
            .setDescription(`**هل أنت متأكد أن توكن الحساب و أيدي الروم صحيحة 
يجب الروم التي وضعت أيديها يكون الحساب موجود في السيرفر التي موجود فيها الروم
ملاحظة : ليس هناك تعويض في هذه المشاكل و شكراا**`)
            .setColor('#FF0000');

        const confirmButton = new MessageButton()
            .setCustomId('confirmPurchase')
            .setLabel('موافق')
            .setStyle('SUCCESS');

        const cancelButton = new MessageButton()
            .setCustomId('cancelPurchase')
            .setLabel('إلغاء')
            .setStyle('DANGER');

        await interaction.reply({
            embeds: [confirmationEmbed],
            components: [
                new MessageActionRow().addComponents(confirmButton, cancelButton)
            ],
            ephemeral: true
        });

        const collector = interaction.channel.createMessageComponentCollector({ time: 90000 });

        collector.on('collect', async (interaction) => {
            if (interaction.customId === 'confirmPurchase') {
                                collector.stop();
        
                const pricetax = Math.floor(price * (20) / (19) + (1));

                const transferMessage = `#credit ${recipientid} ${pricetax}`;

                await interaction.reply(transferMessage);

        

                const filter = (response) =>
                    response.author.id === probotid &&
                    response.content.includes(
                        `:moneybag: | ${interaction.user.username}, has transferred \`$${price}\` to <@!${recipientid}> **`
                    );

                const paymentCollector = interaction.channel.createMessageCollector({ filter, max: 1, time: 90000 });
                paymentCollector.on('collect', async () => {
                    console.log('تم تحويل الكريت');

                    try {
                        let acc = JSON.parse(fs.readFileSync('data.json', 'utf8'));
                        if (!Array.isArray(acc)) {
                                      console.error("أيرور", error);
                            acc = [];
                        }
                        acc.push({ accToken, channelId });
                        fs.writeFileSync('data.json', JSON.stringify(acc, null, 2));


                        await interaction.followUp(`**لقد تمت عملية شراء التلفيل الكتابي بنجاح :white_check_mark: 
لا تنسى رأيك هنا <#${feedback}> **`);

                      
                        setInterval(() => {
                            sendMessage(accToken, channelId);
                        }, Math.floor(Math.random() * (30000 - 10000 + 1)) + 10000); 
                    } catch (error) {
                        console.error("أيرور", error);
                        await interaction.followUp({ content: 'حصل خطأ', ephemeral: true });
                    }
                });

                paymentCollector.on('end', async (collected, reason) => {
                    if (reason === 'time') {
                        console.log('لقد ‘نتهى الوقت و لم يتم الاتحويل');
                        await interaction.followUp({ content: '**لقد إنتهى وقت المحاولة الرجاء الأعادة مرة أخرى**', ephemeral: true });
                    }
                });

            } else if (interaction.customId === 'cancelPurchase') {
                collector.stop();
                await interaction.followUp({ content: 'لقد قم بإلغاء عملية الشراء الرجاء إعادة الشراء و وضع كل شيء صحيح', ephemeral: true });
            }
        });
    }
});
client.on('interactionCreate', async interaction => {
    if (!interaction.isButton()) return;

    if (interaction.customId === 'close') {
        const channel = interaction.channel;
        channel.delete();
    }
});

 

client.login(token);
