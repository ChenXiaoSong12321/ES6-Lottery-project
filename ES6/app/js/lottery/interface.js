import $ from 'jquery'

class Interface{
	// 获取遗漏数据
	getOmit(issue){
		let self = this
		return new Promise((res,rej)=>{
			$.ajax({
				url: '/get/omit',
				dataType: 'json',
				data: {issue:issue},
				success:function (receive) {
					self.setOmit(receive.data)
					res.call(self,receive)
				},
				error:function(err){
					rej.call(err)
				}
			})
			
		})
	}
	// 获取期号
	getOpencode(issue){
		let self = this
		return new Promise((res,rej)=>{
			$.ajax({
				url:'/get/opencode',
				data:{issue:issue},
				dataType:'json',
				success:function(receive){
					self.setOpenCode(receive.data)
					res.call(self,receive)
				},
				error:function(err){
					reject.call(err)
				}
			})
		})
	}
	// 获取当前状态
	getState(issue){
		let self = this
		return new Promise((res,rej)=>{
			$.ajax({
				url:'/get/state',
				data:{issue:issue},
				dataType:'json',
				success:function(receive){
					self.setOpenCode(receive.data)
					res.call(self,receive)
				},
				error:function(err){
					reject.call(err)
				}
			})
		})
	}
}

export default Interface