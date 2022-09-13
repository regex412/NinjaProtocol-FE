const setData = (content) => {
	return {
		type: "SET_PAGENUMBER",
		content
	}
}

const setPageNumber = (obj) => {
	return (dispatch) => {
      return Promise.resolve().then(() => {
		   dispatch(setData(obj))
      })
	}
}

export {
	setPageNumber
}