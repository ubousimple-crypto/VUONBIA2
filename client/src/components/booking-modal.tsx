import { useState } from "react";
import { X, Calendar, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { locations } from "@/lib/data";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
    guests: "",
    date: "",
    time: "",
    notes: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    alert("Cảm ơn bạn đã đặt bàn! Chúng tôi sẽ liên hệ với bạn sớm nhất.");
    onClose();
    setFormData({
      name: "",
      phone: "",
      location: "",
      guests: "",
      date: "",
      time: "",
      notes: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto" data-testid="booking-modal-content">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-800" data-testid="modal-title">
            Đặt bàn
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4" data-testid="booking-form">
          <div>
            <Label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Họ và tên
            </Label>
            <Input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Nhập họ và tên"
              required
              data-testid="input-name"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Số điện thoại
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              placeholder="Nhập số điện thoại"
              required
              data-testid="input-phone"
            />
          </div>

          <div>
            <Label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
              Lựa chọn cơ sở
            </Label>
            <Select value={formData.location} onValueChange={(value) => handleInputChange("location", value)}>
              <SelectTrigger data-testid="select-location">
                <SelectValue placeholder="Chọn cơ sở" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location, index) => (
                  <SelectItem key={index} value={location.name} data-testid={`location-option-${index}`}>
                    {location.name} - {location.districtName}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                <Users className="w-4 h-4 inline mr-1" />
                Số lượng khách
              </Label>
              <Select value={formData.guests} onValueChange={(value) => handleInputChange("guests", value)}>
                <SelectTrigger data-testid="select-guests">
                  <SelectValue placeholder="Chọn số người" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2" data-testid="guests-option-2">2 người</SelectItem>
                  <SelectItem value="4" data-testid="guests-option-4">4 người</SelectItem>
                  <SelectItem value="6" data-testid="guests-option-6">6 người</SelectItem>
                  <SelectItem value="8" data-testid="guests-option-8">8 người</SelectItem>
                  <SelectItem value="10" data-testid="guests-option-10">10+ người</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="w-4 h-4 inline mr-1" />
                Ngày đặt
              </Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => handleInputChange("date", e.target.value)}
                required
                data-testid="input-date"
              />
            </div>
          </div>

          <div>
            <Label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
              <Clock className="w-4 h-4 inline mr-1" />
              Giờ đến
            </Label>
            <Select value={formData.time} onValueChange={(value) => handleInputChange("time", value)}>
              <SelectTrigger data-testid="select-time">
                <SelectValue placeholder="Chọn giờ" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="17:00" data-testid="time-option-1700">17:00</SelectItem>
                <SelectItem value="17:30" data-testid="time-option-1730">17:30</SelectItem>
                <SelectItem value="18:00" data-testid="time-option-1800">18:00</SelectItem>
                <SelectItem value="18:30" data-testid="time-option-1830">18:30</SelectItem>
                <SelectItem value="19:00" data-testid="time-option-1900">19:00</SelectItem>
                <SelectItem value="19:30" data-testid="time-option-1930">19:30</SelectItem>
                <SelectItem value="20:00" data-testid="time-option-2000">20:00</SelectItem>
                <SelectItem value="20:30" data-testid="time-option-2030">20:30</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
              Ghi chú
            </Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => handleInputChange("notes", e.target.value)}
              rows={3}
              placeholder="Ghi chú thêm (nếu có)"
              data-testid="textarea-notes"
            />
          </div>

          <Button 
            type="submit" 
            className="w-full bg-primary text-white py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors"
            data-testid="button-submit-booking"
          >
            XÁC NHẬN ĐẶT BÀN
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
