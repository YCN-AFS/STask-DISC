from datetime import datetime

# Mốc thời gian hiện tại
current_time = datetime.now()

# Deadline đầu vào
deadline_str = "16:58 14/10/2024"
deadline = datetime.strptime(deadline_str, "%H:%M %d/%m/%Y")

# Tính thời gian còn lại
time_remaining = deadline - current_time

# Lấy số ngày, giờ, phút còn lại
days = time_remaining.days
hours, remainder = divmod(time_remaining.seconds, 3600)
minutes = remainder // 60

# Hiển thị kết quả
print(f"Còn lại: {days} ngày, {hours} giờ, {minutes} phút")


def format_time(days, hours, minutes):
    time_units = [(days, "ngày"), (hours, "giờ"), (minutes, "phút")]
    result = [f"{value} {unit}" for value, unit in time_units if value > 0]
    
    return "Còn lại: " + ", ".join(result) if result else "Không còn thời gian"

# Ví dụ sử dụng
days = 0
hours = 0
minutes = 6

print(format_time(days, hours, minutes))
