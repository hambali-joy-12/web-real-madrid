

const CheckBox = () => {
    return (
        <div className="flex gap-3 items-center">
            <input type="checkbox" className="checked:bg-blue-500" name="first" id="football" />
            <label htmlFor="football">First Team - Men</label>
        </div>
    )
}

export default CheckBox