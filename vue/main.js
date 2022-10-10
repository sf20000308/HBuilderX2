var app = new Vue({
  el: "#player",
  data:{
	  //查询关键字
	  query:"",
	  //歌曲数组
	  musicList:[],
	  musicUrl:"",
	  musicCover:"",
	  //歌曲评论
	  hotComments:[],
	  //动画播放状态
	  isPlaying:false,
	  mvUrl:"",
	  //遮盖层的显示状态
	  isShow:false,
  },
  methods:{
	  //歌曲搜索
	  searchMusic:function(){
		  var that=this;
		  axios.get("https://autumnfish.cn/search?keywords="+this.query)
	     .then(function(response){
		  //console.log(response);
		  that.musicList=response.data.result.songs;
		  console.log(response.data.result.songs)
		  },
		  function(err){ }
		  );
		  },
	  playMusic:function(musicid){
			  //console.log(musicId);
			  var that=this;
			  axios.get("https://autumnfish.cn/song/url?id="+musicid)
			  .then(function(response){
							  //console.log( response.data.data[0].url);
			 that.musicUrl = response.data.data[0].url;
			},function(err){})
			//歌曲详情获取
			 axios.get("https://autumnfish.cn/song/detail?ids="+musicid)
							   .then(function(response){
												//console.log(response.data.songs[0].al.picUrl);
												that.musicpic=response.data.songs[0].al.picUrl;
											},function(err){})
											//歌曲评论获取
											 axios.get("https://autumnfish.cn/comment/hot?type=0&id="+musicid)
															.then(function(response){
																that.hotComments = response.data.hotComments;
															},function(err){})
		  },
	  play:function(){
			//console.log("play");
			this.isPlaying=true;
	  },
	   pause:function(){
			//console.log("pause");
			this.isPlaying=false;
	  },
		//播放mv
		  playMV:function(mvid){
		                    var that = this;
		                    axios.get("https://autumnfish.cn/mv/url?id="+mvid)
		                    .then(function(response){
		                        //console.log(response)
		                        console.log(response.data.data.url);
								that.isShow=true;
		                        that.mvUrl=response.data.data.url;
		                    },
							function(err){}
							);
		},
		//隐藏
		hide:function(){
			this.isShow=false;
		}
		}
  });
