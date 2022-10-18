<template>
    <div class="waveBox">
        <div id="waveform" ref="waveform" />
        <div v-if="!audioSrc || isErr" class="noAudio">暂无录音</div>
        <i v-show="!isPlay && audioSrc" class="el-icon-video-play" style="color: #77b0f9; font-size: 30px; margin-left: 10px;" @click="playMusic(true)" />
        <i v-show="isPlay" class="el-icon-video-pause" style="color: #77b0f9; font-size: 30px; margin-left: 10px;" @click="playMusic(false)" />
        <i v-if="downUrl" class="el-icon-download" style="color: #77b0f9; font-size: 30px; margin-left: 10px;" @click="downAudio" />
    </div>
</template>

<script>
import WaveSurfer from 'wavesurfer.js'
// import CursorPlugin from 'wavesurfer.js/dist/plugin/wavesurfer.cursor.js'
export default {
    name: 'MyWavesurfer',
    props: {
        audioSrc: String,
        downUrl: String
    },
    data() {
        return {
            wavesurfer: null,
            isPlay: false,
            isErr: false
        }
    },
    watch: {
        audioSrc(val) {
            console.log(this.audioSrc)
            val && this.wavesurfer.load(val)
            val && this.audioError()
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            this.$nextTick(() => {
                this.wavesurfer = WaveSurfer.create({
                    container: this.$refs.waveform,
                    waveColor: '#409eff',
                    progressColor: '#409eff',
                    backend: 'MediaElement',
                    mediaControls: false,
                    audioRate: '1',
                    height: 30,
                    cursorColor: '#409eff',
                    hideScrollbar: true
                    // 使用时间轴插件
                    // plugins: [
                    //     CursorPlugin.create({
                    //         showTime: true,
                    //         opacity: 1,
                    //         customShowTimeStyle: {
                    //             'background-color': '#000',
                    //             color: '#fff',
                    //             padding: '2px',
                    //             'font-size': '10px'
                    //         }
                    //     })
                    // ]

                })
                // 特别提醒：此处需要使用require(相对路径)，否则会报错
                this.audioSrc && this.wavesurfer.load(this.audioSrc)
                this.wavesurfer.on('finish', () => {
                    this.isPlay = false
                    this.wavesurfer.stop()
                })
            })
        },
        playMusic(status) {
            if (this.audioSrc) {
                this.isPlay = status
                this.wavesurfer.playPause()
            }
        },
        downAudio() {
            this.downMethod(this.downUrl)
        },
        audioError() {
            this.wavesurfer.on('error', () => {
                // !this.isErr && this.$message.error('录音地址错误')
                this.isErr = true
            })
        },
        downMethod(url, name) {
            let downloadLink = document.createElement('a')
            downloadLink.href = encodeURI(url)
            downloadLink.download =  name || '' // `${name}.csv`
            document.body.appendChild(downloadLink)
            downloadLink.click()
            document.body.removeChild(downloadLink)
        }
    }
}
</script>

<style scoped>
.waveBox {
    height: 50px;
    background: #f0f1f2;
    display: flex;
    padding: 0 10px;
    align-items: center;
    position: relative;
}
.waveBox #waveform,
.waveBox .noAudio {
    flex: 1;
}
.waveBox .noAudio {
    width: 100%;
    position: absolute;
    background: #f0f1f2;
    left: 0;
    top: 0;
    line-height: 50px;
    color: #999;
    font-size: 12px;
    text-align: center;
}
</style>
